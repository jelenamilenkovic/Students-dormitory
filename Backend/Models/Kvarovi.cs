using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models{

[Table("Kvar")]
public class Kvar{
[Key]
[Column("ID")]
public int ID { get; set; }

[Column("Ime")]
public string Ime{get;set;}

[Column("Prezime")]
public string Prezime{get;set;}

[Column("X")]
public int X { get; set; }

[Column("Y")]
public int Y{get;set;}

[Column("Regbroj")]
public int Regbroj{get;set;}

[Column("Sadrzaj")]
public string Sadrzaj{get;set;}
[JsonIgnore]
public Dom Dom{get;set;}
    }
}