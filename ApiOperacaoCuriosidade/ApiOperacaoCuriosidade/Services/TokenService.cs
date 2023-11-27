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
            Subject = new ClaimsIdentity(new Claim[] {
                new Claim(ClaimTypes.Name, usuario.Nome.ToString()),
                new Claim(ClaimTypes.Email, usuario.Email.ToString()),
                new Claim(ClaimTypes.StreetAddress, usuario.Endereco.ToString())
            }),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = new SigningCredentials
                                 (new SymmetricSecurityKey(key),
                                 SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}

