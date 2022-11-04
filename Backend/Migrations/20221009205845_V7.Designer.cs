﻿// <auto-generated />
using System;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Migrations
{
    [DbContext(typeof(DomContext))]
    [Migration("20221009205845_V7")]
    partial class V7
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Backend.Models.Dom", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("M")
                        .HasColumnType("int")
                        .HasColumnName("M");

                    b.Property<int>("N")
                        .HasColumnType("int")
                        .HasColumnName("N");

                    b.Property<string>("Naziv")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Naziv");

                    b.HasKey("ID");

                    b.ToTable("Dom");
                });

            modelBuilder.Entity("Backend.Models.Finansije", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Dodatak")
                        .HasColumnType("int")
                        .HasColumnName("Dodatak");

                    b.Property<int>("Mesecc")
                        .HasColumnType("int")
                        .HasColumnName("Mesecc");

                    b.Property<int>("Nocenje")
                        .HasColumnType("int")
                        .HasColumnName("Nocenje");

                    b.Property<int?>("StanarID")
                        .HasColumnType("int");

                    b.Property<int>("Stanarina")
                        .HasColumnType("int")
                        .HasColumnName("Stanarina");

                    b.Property<int>("Uplata")
                        .HasColumnType("int")
                        .HasColumnName("Uplata");

                    b.HasKey("ID");

                    b.HasIndex("StanarID");

                    b.ToTable("Finansije");
                });

            modelBuilder.Entity("Backend.Models.Kvar", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("DomID")
                        .HasColumnType("int");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Ime");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Prezime");

                    b.Property<int>("Regbroj")
                        .HasColumnType("int")
                        .HasColumnName("Regbroj");

                    b.Property<string>("Sadrzaj")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Sadrzaj");

                    b.Property<int>("X")
                        .HasColumnType("int")
                        .HasColumnName("X");

                    b.Property<int>("Y")
                        .HasColumnType("int")
                        .HasColumnName("Y");

                    b.HasKey("ID");

                    b.HasIndex("DomID");

                    b.ToTable("Kvar");
                });

            modelBuilder.Entity("Backend.Models.Referent", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("DomoviID")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Email");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Ime");

                    b.Property<string>("Lozinka")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Lozinka");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Prezime");

                    b.HasKey("ID");

                    b.HasIndex("DomoviID");

                    b.ToTable("Referent");
                });

            modelBuilder.Entity("Backend.Models.Soba", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("DomID")
                        .HasColumnType("int");

                    b.Property<int>("Kapacitet")
                        .HasColumnType("int")
                        .HasColumnName("Kapacitet");

                    b.Property<int>("X")
                        .HasColumnType("int")
                        .HasColumnName("X");

                    b.Property<int>("Y")
                        .HasColumnType("int")
                        .HasColumnName("Y");

                    b.HasKey("ID");

                    b.HasIndex("DomID");

                    b.ToTable("Soba");
                });

            modelBuilder.Entity("Backend.Models.Stanar", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Email");

                    b.Property<string>("Fakultet")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Fakultet");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Ime");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Prezime");

                    b.Property<int>("Regbroj")
                        .HasColumnType("int")
                        .HasColumnName("Regbroj");

                    b.Property<string>("Roditelj")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Roditelj");

                    b.Property<int?>("SobaID")
                        .HasColumnType("int");

                    b.Property<int>("Telefon")
                        .HasColumnType("int")
                        .HasColumnName("Telefon");

                    b.Property<string>("Tip")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Tip");

                    b.Property<int>("X")
                        .HasColumnType("int")
                        .HasColumnName("X");

                    b.Property<int>("Y")
                        .HasColumnType("int")
                        .HasColumnName("Y");

                    b.HasKey("ID");

                    b.HasIndex("SobaID");

                    b.ToTable("Stanar");
                });

            modelBuilder.Entity("Backend.Models.Finansije", b =>
                {
                    b.HasOne("Backend.Models.Stanar", "Stanar")
                        .WithMany("Finansije")
                        .HasForeignKey("StanarID");

                    b.Navigation("Stanar");
                });

            modelBuilder.Entity("Backend.Models.Kvar", b =>
                {
                    b.HasOne("Backend.Models.Dom", "Dom")
                        .WithMany("Kvarovi")
                        .HasForeignKey("DomID");

                    b.Navigation("Dom");
                });

            modelBuilder.Entity("Backend.Models.Referent", b =>
                {
                    b.HasOne("Backend.Models.Dom", "Domovi")
                        .WithMany()
                        .HasForeignKey("DomoviID");

                    b.Navigation("Domovi");
                });

            modelBuilder.Entity("Backend.Models.Soba", b =>
                {
                    b.HasOne("Backend.Models.Dom", "Dom")
                        .WithMany("Sobe")
                        .HasForeignKey("DomID");

                    b.Navigation("Dom");
                });

            modelBuilder.Entity("Backend.Models.Stanar", b =>
                {
                    b.HasOne("Backend.Models.Soba", "Soba")
                        .WithMany("Stanari")
                        .HasForeignKey("SobaID");

                    b.Navigation("Soba");
                });

            modelBuilder.Entity("Backend.Models.Dom", b =>
                {
                    b.Navigation("Kvarovi");

                    b.Navigation("Sobe");
                });

            modelBuilder.Entity("Backend.Models.Soba", b =>
                {
                    b.Navigation("Stanari");
                });

            modelBuilder.Entity("Backend.Models.Stanar", b =>
                {
                    b.Navigation("Finansije");
                });
#pragma warning restore 612, 618
        }
    }
}
