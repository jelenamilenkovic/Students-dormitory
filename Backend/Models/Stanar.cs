using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models{

[Table("Stanar")]
    public class Stanar{
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        
        
        [Column("Ime")]
        public string Ime { get; set; }

        [Column("Prezime")]
        public string Prezime{get;set;}

        [Column("Fakultet")]
        public string Fakultet{get;set;}


        [Column("Regbroj")]
        public int Regbroj{get;set;}

        [Column("Tip")]
        public string Tip{get;set;}

        [Column("X")]
        public int X{get;set;}

        [Column("Y")]
        public int Y{get;set;}

        [JsonIgnore]
        public Soba Soba{get;set;}
    }
}