using ApiOperacaoCuriosidade.Enums;
using System.ComponentModel.DataAnnotations;

namespace ApiOperacaoCuriosidade.Models {
    public class Usuario {
        public int UsuarioId { get; set; }

        [MaxLength(128)]
        public string? Nome { get; set; }

        public int? Idade { get; set; }

        [MaxLength(70)]
        public string? Email { get; set; }

        [MaxLength(128)]
        public string? Endereco { get; set; }

        [MaxLength(16)]
        public string? Senha { get; set; }

        [MaxLength(300)]
        public string? Interesses { get; set; }

        [MaxLength(300)]
        public string? Sentimentos { get; set; }

        [MaxLength(300)]
        public string? Valores { get; set; }
        public StatusUsuarios? Status { get; set; } = StatusUsuarios.INATIVO;
        public DateTime? DataCad { get; set; } = DateTime.Now;
    }
}
