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

        private static int contMiniCadastros = 0;

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

        [HttpGet("exibir-perfil-pessoa")]
        public ActionResult<int> ExibirPerfilPessoa(string email) {
            var user = _dbContext.Usuarios.FirstOrDefault(u => u.Email == email);


            if (user is null) {
                return BadRequest(new { message = "Usuário inválido." });
            }

            return Ok(user);
        }

        [HttpGet("verificar")]
        public ActionResult VerificaEmail(string email) {
            var emailExiste = _dbContext.Usuarios.Any(u => u.Email == email);

            if (emailExiste) {
                return BadRequest(new { message = "E-mail já utilizado." });
            }

            return Ok(new { message = "E-mail válido. "});
        }

        [HttpGet("contador-de-mini-cadastros")]
        public ActionResult ContadorMiniCadastros() {
            return Ok(contMiniCadastros);
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

        [HttpPost("mini-cadastrar")]
        public ActionResult MiniCadastrar(string email, string senha, string nome) {
            if (EmailJaCadastrado(email)) {
                return BadRequest(new { message = "E-mail já cadastrado." });
            }

            Usuario usuario = new Usuario(email, senha, nome);

            _dbContext.Usuarios.Add(usuario);
            _dbContext.SaveChanges();

            contMiniCadastros++;

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
            var senhaParaPassar = user.Senha;
            user.Senha = "";

            var resposta = new AutenticacaoResposta {
                Id = user.UsuarioId,
                Idade = (int) user.Idade,
                Nome = user.Nome,
                Email = user.Email,
                Senha = senhaParaPassar ?? "",
                Endereco = user.Endereco,
                Sentimentos = user.Sentimentos,
                Interesses = user.Interesses,
                Valores = user.Valores,
                Token = token
            };

            return Ok(resposta);
        }

        [HttpPut("atualizar-dados")]
        public ActionResult AtualizarDados(string email, string senha, Usuario usuario) {
            var user = _dbContext.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);

            if (user == null) {
                return BadRequest(new { message = "Usuário não encontrado." });
            }

            if (user.Email != usuario.Email && EmailJaCadastrado(usuario.Email)) {
                return BadRequest(new { message = "E-mail já utilizado. " });
            }

            user.Idade = usuario.Idade;
            user.Email = usuario.Email;
            user.Endereco = usuario.Endereco;
            user.Senha = usuario.Senha;
            user.Interesses = usuario.Interesses;
            user.Sentimentos = usuario.Sentimentos;
            user.Valores = usuario.Valores;

            _dbContext.SaveChanges();

            usuario.Senha = "";

            return Ok(new { message = "Dados atualizados com sucesso. " });
        }

        [HttpDelete("deletar")]
        public ActionResult Deletar(string email, string senha) {
            var user = _dbContext.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);

            if (user == null) {
                return BadRequest(new { message = "Usuário não encontrado ou não autorizado." });
            }

            _dbContext.Usuarios.Remove(user);
            _dbContext.SaveChanges();

            return Ok(new { message = "Conta deletada. "} );
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
