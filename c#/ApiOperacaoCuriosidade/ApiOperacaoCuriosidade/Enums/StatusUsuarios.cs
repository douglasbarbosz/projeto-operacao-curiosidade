using System.ComponentModel;

namespace ApiOperacaoCuriosidade.Enums {
    public enum StatusUsuarios {
        [Description("Usuário Inativo")]
        INATIVO = 0,
        [Description("Usuário Ativo")]
        ATIVO = 1
    }
}
