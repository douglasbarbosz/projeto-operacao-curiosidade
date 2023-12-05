using ApiOperacaoCuriosidade.Models;

namespace ApiOperacaoCuriosidade.Repository;
public class AutenticacaoResposta {
    public int Id { get; set; }
    public int Idade { get; set; }
    public string? Nome { get; set; }
    public string? Token { get; set; }
    public string? Email { get; internal set; }
    public string? Senha { get; internal set; }
    public string? Endereco {  get; internal set; }
    public string? Interesses {  get; internal set; }
    public string? Sentimentos {  get; internal set; }
    public string? Valores {  get; internal set; }
}