using Microsoft.EntityFrameworkCore;

namespace Backend.Models{

    public class DomContext:DbContext{
       public DbSet<Dom> Domovi {get;set;}
        public DbSet<Soba> Sobe{get;set;}

        public DbSet<Stanar> Stanari{get;set;}
        public DomContext(DbContextOptions options):base (options){

        }
    }
}