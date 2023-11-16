using ApiOperacaoCuriosidade.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ApiOperacaoCuriosidade.Map {
    public class UsuarioMap : IEntityTypeConfiguration<Usuario> {
        public void Configure(EntityTypeBuilder<Usuario> builder) {
            builder.HasKey(x => x.UsuarioId);
            builder.Property(x => x.Nome);
            builder.Property(x => x.Idade);
            builder.Property(x => x.Email);
            builder.Property(x => x.Endereco);
            builder.Property(x => x.Senha);
            builder.Property(x => x.Interesses);
            builder.Property(x => x.Sentimentos);
            builder.Property(x => x.Valores);
            builder.Property(x => x.Status);
            builder.Property(x => x.DataCad);
        }
    }
}
