using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class V4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Finansije",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Uplata = table.Column<int>(type: "int", nullable: false),
                    Dug = table.Column<int>(type: "int", nullable: false),
                    Dodatak = table.Column<int>(type: "int", nullable: false),
                    Mesec = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StanarID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Finansije", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Finansije_Stanar_StanarID",
                        column: x => x.StanarID,
                        principalTable: "Stanar",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Finansije_StanarID",
                table: "Finansije",
                column: "StanarID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Finansije");
        }
    }
}
