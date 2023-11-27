using ApiOperacaoCuriosidade.Models;

namespace ApiOperacaoCuriosidade.Repository;
public class AutenticacaoResposta {
    public string? Nome { get; set; }
    public string? Token { get; set; }
    public string? Email { get; internal set; }
    public string? Senha { get; internal set; }
}