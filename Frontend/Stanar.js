export class Stanar{

    constructor(ime, prezime,fakultet,regbroj,tip,x,y){
        this.ime=ime;
        this.prezime=prezime;
        this.fakultet=fakultet;
        this.regbroj=regbroj;
        this.tip=tip;
        this.stanarkon=null;
        this.x=x;
        this.y=y;
    }
vratiregbroj(r){
    if(r==this.regbroj) return 1;
}
   crtajStanara(host){
       this.stanarkon=document.createElement("div");
       this.stanarkon.className="stanar";
       host.appendChild(this.stanarkon);
   }
obrisiStanara(ime,prezime,fakultet,regbroj,tip,x,y){
    this.ime=" ";
    this.prezime=" ";
    this.stanarkon.innerHTML=this.ime+" "+this.prezime;
    this.regbroj="";
    console.log(this.regbroj);
    this.fakultet=" ";
    this.x=x;
    this.y=y;
}
    azurirajStanara(ime,prezime,fakultet,regbroj,tip,x,y){
        this.ime=ime;
        this.prezime=prezime;
        this.regbroj=regbroj;
        this.fakultet=fakultet;
        this.x=x;
        this.y=y;
        this.tip=tip;
        this.stanarkon.innerHTML=this.ime+" "+this.prezime;
        
        
    }
}