using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class V7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Mesec",
                table: "Finansije");

            migrationBuilder.RenameColumn(
                name: "Dug",
                table: "Finansije",
                newName: "Stanarina");

            migrationBuilder.AddColumn<string>(
                name: "Ime",
                table: "Kvar",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Prezime",
                table: "Kvar",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Mesecc",
                table: "Finansije",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Nocenje",
                table: "Finansije",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ime",
                table: "Kvar");

            migrationBuilder.DropColumn(
                name: "Prezime",
                table: "Kvar");

            migrationBuilder.DropColumn(
                name: "Mesecc",
                table: "Finansije");

            migrationBuilder.DropColumn(
                name: "Nocenje",
                table: "Finansije");

            migrationBuilder.RenameColumn(
                name: "Stanarina",
                table: "Finansije",
                newName: "Dug");

            migrationBuilder.AddColumn<string>(
                name: "Mesec",
                table: "Finansije",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
