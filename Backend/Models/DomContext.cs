using Microsoft.EntityFrameworkCore;

namespace Backend.Models{

    public class DomContext:DbContext{
       public DbSet<Dom> Domovi {get;set;}
        public DbSet<Soba> Sobe{get;set;}
        public DbSet<Stanar> Stanari{get;set;}
        public DbSet<Referent> Referenti{get;set;}
        public DbSet<Kvar> Kvarovi{get;set;}
        public DbSet<Finansije> Finansije{get;set;}
        public DomContext(DbContextOptions options):base (options){

        }
    }
}