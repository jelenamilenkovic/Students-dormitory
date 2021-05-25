using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models{

[Table("Soba")]
    public class Soba{
[Key]
[Column("ID")]
public int ID { get; set; }

[Column("X")]
public int X { get; set; }

[Column("Y")]
public int Y{get;set;}

[Column("Kapacitet")]
public int Kapacitet{get;set;}

[Column("Stanari")]
public virtual List<Stanar> Stanari {get;set;}
[JsonIgnore]
public Dom Dom{get;set;}
    }
}