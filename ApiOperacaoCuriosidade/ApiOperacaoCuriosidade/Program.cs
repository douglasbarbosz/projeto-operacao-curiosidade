using ApiOperacaoCuriosidade;
using ApiOperacaoCuriosidade.Context;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(o => o.AddPolicy("AllowSpecificOrigin", builder =>
{
    builder.WithOrigins("http://127.0.0.1:5500")
           .AllowAnyHeader()
           .AllowAnyMethod();
}));

builder.Services.AddEntityFrameworkSqlServer()
    .AddDbContext<UsuariosListaContext>(
        options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

var key = Encoding.ASCII.GetBytes(Settings.Secret);

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x => {
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };

    x.Events = new JwtBearerEvents
    {
        OnTokenValidated = context => {
            var token = context.SecurityToken as JwtSecurityToken;
            if (token != null) {
                Console.WriteLine($"Token válido. Subject: {token.Subject}, Expires: {token.ValidTo}");
            }
            else {
                Console.WriteLine("Token não é um JWT válido.");
            }

            return Task.CompletedTask;
        }
    };
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowSpecificOrigin");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
