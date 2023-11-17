using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiOperacaoCuriosidade.Migrations
{
    /// <inheritdoc />
    public partial class InitialDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: false),
                    Idade = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(70)", maxLength: 70, nullable: false),
                    Endereco = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: false),
                    Interesses = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Sentimentos = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Valores = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    DataCad = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.UsuarioId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
