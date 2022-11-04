using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models{

[Table("Finansije")]
    public class Finansije{
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        [Column("Uplata")]
        public int Uplata { get; set; }
       [Column("Stanarina")]
        public int Stanarina{get;set;}
        [Column("Nocenje")]
       public int Nocenje{get;set;}
        [Column("Dodatak")]
        public int Dodatak{get;set;}
        [Column("Mesecc")]
        public int Mesecc{get;set;}
        [JsonIgnore]
        public Stanar Stanar{get;set;}
    }
}