using ApiOperacaoCuriosidade.Models;

namespace ApiOperacaoCuriosidade.Repository.Interfaces {
    public interface IUsuariosRepositorio {

        Task<List<Usuario>> BuscarUsuarios();
        Task<Usuario> BuscarUsuarioPorId(int id);
        Task<Usuario> Adicionar(Usuario usuario);
        Task<Usuario> Atualizar(Usuario usuario, int id);
        Task<bool> Apagar(int id);
    }
}
