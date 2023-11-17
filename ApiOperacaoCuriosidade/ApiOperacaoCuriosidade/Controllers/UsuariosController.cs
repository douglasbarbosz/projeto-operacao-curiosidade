using ApiOperacaoCuriosidade.Context;
using ApiOperacaoCuriosidade.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace ApiOperacaoCuriosidade.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase {

        public readonly UsuariosListaContext _dbContext;
        public UsuariosController(UsuariosListaContext usuariosListaContext) {
            _dbContext = usuariosListaContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> BuscarUsuarios() {
            try {
                return _dbContext.Usuarios.AsNoTracking().ToList();
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Ocorreu um problema ao tratar a sua solicitação.");
            }
        }

        [HttpGet("{int id}")]
        public ActionResult<Usuario> BuscarUsuarioPorId(int id) {
            try {
                var usuario = _dbContext.Usuarios.FirstOrDefault(u => u.UsuarioId == id);
                if (usuario == null) {
                    return NotFound();
                }
                return Ok(usuario);
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Ocorreu um problema ao tratar a sua solicitação.");
            }
        }

        [HttpPost("cadastrar")]
        public ActionResult Cadastrar(Usuario usuario) {
            if (usuario is null) {
                return BadRequest();
            }

            _dbContext.Usuarios.Add(usuario);
            _dbContext.SaveChanges();

            return new CreatedAtRouteResult(
                new { id = usuario.UsuarioId }, usuario);
        }

        [HttpPut("{id:int}")]
        public ActionResult AtualizarDados(int id, Usuario usuario) {
            if (id != usuario.UsuarioId) {
                return BadRequest();
            }

            if (!_dbContext.Usuarios.Any(u => u.UsuarioId == id)) {
                return NotFound("Usuário não encontrado.");
            }

            _dbContext.Entry(usuario).State = EntityState.Modified;
            _dbContext.SaveChanges();

            return Ok(usuario);
        }

        [HttpDelete("{id:int}")]
        public ActionResult Deletar(int id) {
            var usuario = _dbContext.Usuarios.FirstOrDefault
                (u => u.UsuarioId == id);

            if (usuario is null) {
                return NotFound();
            }

            _dbContext.Usuarios.Remove(usuario);
            _dbContext.SaveChanges();

            return Ok(usuario);
        }
    }
}
