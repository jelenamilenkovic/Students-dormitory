using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models{

    [Table("Dom")]
    public class Dom{

[Key]
[Column("ID")]
public int ID { get; set; }

[Column("N")]
public int N{get;set;}

[Column("M")]
public int M{get;set;}

[Column("Naziv")]
public string Naziv{get;set;}

[Column("Kvarovi")]
public virtual List<Kvar> Kvarovi{get;set;}

[Column("Sobe")]
public virtual List<Soba> Sobe{get;set;}
    }
}
    