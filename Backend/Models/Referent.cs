using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models{

[Table("Referent")]
    public class Referent{
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        [Column("Ime")]
        public string Ime { get; set; }
        [Column("Prezime")]
        public string Prezime{get;set;}
        [Column("Email")]
        public string Email{get;set;}
        [Column("Lozinka")]
        public string Lozinka{get;set;}

        [JsonIgnore]
        public Dom Domovi{get;set;}
    }
}