using Microsoft.EntityFrameworkCore;
using ApiOperacaoCuriosidade.Models;
using ApiOperacaoCuriosidade.Map;

namespace ApiOperacaoCuriosidade.Context;
public class UsuariosListaContext : DbContext {
    public UsuariosListaContext(DbContextOptions<UsuariosListaContext> options) : base(options) { }

    public DbSet<Usuario> Usuarios { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.ApplyConfiguration(new UsuarioMap());
        base.OnModelCreating(modelBuilder);
    }
}
