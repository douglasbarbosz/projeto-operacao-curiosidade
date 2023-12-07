using ApiOperacaoCuriosidade.Context;
using ApiOperacaoCuriosidade.Models;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;

namespace ApiOperacaoCuriosidade.Repository;
public class UsuarioRepositorio {
    public readonly UsuariosListaContext _dbContext;
    public UsuarioRepositorio(UsuariosListaContext usuariosListaContext) {
        _dbContext = usuariosListaContext;
    }

    public static Usuario Get(string email, string senha, UsuariosListaContext _dbContext) {

        var user = _dbContext.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        
        return user;
    }
}
