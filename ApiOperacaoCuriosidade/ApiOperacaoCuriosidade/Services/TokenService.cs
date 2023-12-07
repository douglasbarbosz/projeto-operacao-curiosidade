using ApiOperacaoCuriosidade.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ApiOperacaoCuriosidade.Services;

    public class TokenService {
        public static string GeradorToken(Usuario usuario) {
            if (usuario == null) {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Settings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(new Claim[]
                {
                new Claim(ClaimTypes.Name, usuario.Nome.ToString()),
                new Claim(ClaimTypes.Email, usuario.Email.ToString()),
                new Claim(ClaimTypes.StreetAddress, usuario.Endereco.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(5),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            SecurityToken token;

            try {
                token = tokenHandler.CreateToken(tokenDescriptor);
            }
            catch (Exception ex) {
                Console.WriteLine($"Erro ao criar o token: {ex.Message}");
                return null;
            }

            try {
                var tokenString = tokenHandler.WriteToken(token);
                return tokenString;
            }
            catch (Exception ex) {
                Console.WriteLine($"Erro ao escrever o token: {ex.Message}");
                return null;
            }
        }
}