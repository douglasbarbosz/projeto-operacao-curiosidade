using ApiOperacaoCuriosidade.Context;
using ApiOperacaoCuriosidade.Models;
using ApiOperacaoCuriosidade.Repository;
using ApiOperacaoCuriosidade.Services;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("listar")]
        public ActionResult<IEnumerable<Usuario>> BuscarUsuarios() {
            try {
                return _dbContext.Usuarios.AsNoTracking().ToList();
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Ocorreu um problema ao tratar a sua solicitação.");
            }
        }

        [HttpGet("ultimos-cadastros")]
        public ActionResult UltimosCadastros() {
            return Ok(_dbContext.Usuarios
                .OrderByDescending(u => u.DataCad).Take(13).ToList());
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

        [HttpGet("total-cadastros")]
        public ActionResult<int> GetTotalCadastros() {
            return Ok(_dbContext.Usuarios.Count());
        }

        [HttpGet("total-cadastros-ultimo-mes")]
        public ActionResult<int> GetTotalCadastrosMesPassado() {
            DateTime primeiroDiaMesPassado = DateTime.Now.AddMonths(-1).Date.AddDays(1 - DateTime.Now.Day);
            DateTime ultimoDiaMesPassado = DateTime.Now.Date.AddDays(-DateTime.Now.Day);

            return Ok(_dbContext.Usuarios
                .Where(u => u.DataCad >= primeiroDiaMesPassado 
                && u.DataCad <= ultimoDiaMesPassado)
                .Count());
        }

        [HttpGet("verificar")]
        public ActionResult VerificaEmail(string email) {
            var emailExiste = _dbContext.Usuarios.Any(u => u.Email == email);

            return Ok(emailExiste);
        }

        [HttpPost("cadastrar")]
        public ActionResult Cadastrar(Usuario usuario) {
            if (usuario is null) {
                return BadRequest();
            }

            if (EmailJaCadastrado(usuario.Email)) {
                return BadRequest(new { message = "E-mail já cadastrado." });
            }

            _dbContext.Usuarios.Add(usuario);
            _dbContext.SaveChanges();

            return new CreatedAtRouteResult(
                new { id = usuario.UsuarioId }, usuario);
        }

        [HttpPost("logar")]
        [AllowAnonymous]
        public async Task<ActionResult<AutenticacaoResposta>> Autenticacao(string email, string senha) {
            var user = UsuarioRepositorio.Get(email, senha, _dbContext);

            if (user == null) {
                return BadRequest(new { message = "Credenciais inválidas." });
            }

            var token = TokenService.GeradorToken(user);
            user.Senha = "";

            var resposta = new AutenticacaoResposta {
                Nome = user.Nome,
                Email = user.Email,
                Senha = user.Senha ?? "",
                Token = token
            };

            return Ok(resposta);
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

        [HttpPatch("atualizar-endereco")]
        public ActionResult AtualizarEndereco(string email, string senha, string endereco) {
            var user = UsuarioRepositorio.Get(email, senha, _dbContext);

            if (user == null) {
                return BadRequest(new { message = "Usuário não encontrado ou não autorizado." });
            }

            user.Endereco = endereco;
            _dbContext.SaveChanges();

            return Ok(new { message = "Endereço atualizado com sucesso." });
        }

        [HttpPatch("atualizar-email")]
        public ActionResult AtualizarEmail(int id, Usuario usuario) {
            var user = _dbContext.Usuarios.Find(id);

            if (user == null)
            {
                return NotFound("Usuário não encontrado.");
            }

            user.Email = usuario.Email;
            _dbContext.SaveChanges();
            return Ok(user);
        }

        [HttpPatch("atualizar-senha")]
        public ActionResult AtualizarSenha(int id, Usuario usuario) {
            var user = _dbContext.Usuarios.Find(id);

            if (user == null)
            {
                return NotFound("Usuário não encontrado.");
            }

            user.Senha = usuario.Senha;
            _dbContext.SaveChanges();
            return Ok(user);
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
        private bool EmailJaCadastrado(string email) {
            if (_dbContext.Usuarios.Any(u => u.Email == email)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
