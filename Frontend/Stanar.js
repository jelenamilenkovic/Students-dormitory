import { Finansije } from "./Finansije.js";
export class Stanar{

    constructor(ime, prezime,fakultet,roditelj,email,telefon,regbroj,tip,x,y){
        this.ime=ime;
        this.prezime=prezime;
        this.roditelj=roditelj;
        this.fakultet=fakultet;
        this.regbroj=regbroj;
        this.tip=tip;
        this.stanarkon=null;
        this.stanjeracuna=[];
        this.stanjeracuna[0]=new Finansije(19800,2200,0,0,9);
        this.email=email;
        this.telefon=telefon;
        this.x=x;
        this.y=y;
    }
azurirajfinansije(nocenje,uplata,stanarina,dodatak,mesecc){
    this.stanjeracuna[0].azuriranje(nocenje,uplata,stanarina,dodatak,mesecc);
    }
vratiregbroj(r){
    if(r==this.regbroj) return 1;
}
   crtajStanara(host){
       this.stanarkon=document.createElement("div");
       this.stanarkon.className="stanar";
       this.stanarkon.innerHTML=this.ime+" "+this.prezime;
      // this.stanarkon.style.backgroundColor="red";
       host.appendChild(this.stanarkon);
   }
obrisiStanara(ime,prezime,fakultet,roditelj,email,telefon,regbroj,tip,x,y){
    this.ime=" ";
    this.prezime=" ";
    this.roditelj=" ";
    this.stanarkon.innerHTML=this.ime+" "+this.prezime;
    this.regbroj="";
    this.stanjeracuna=null;
    this.email="";
    this.tip="lightgray";
    this.telefon="";
    this.fakultet=" ";
    this.x=x;
    this.y=y;
}
    azurirajStanara(ime,prezime,fakultet,roditelj,email,telefon,regbroj,tip,x,y,uplata,dodatak,stanarina,nocenje,mesec){
        this.ime=ime;
        this.prezime=prezime;
        this.regbroj=regbroj;
        this.fakultet=fakultet;
        this.email=email;
        this.telefon=telefon;
        this.roditelj=roditelj;
        this.x=x;
        this.y=y;
        this.tip=tip;
        this.stanjeracuna[0].azuriranje(nocenje,uplata,stanarina,dodatak,mesec);
      //  this.stanarkon.innerHTML=this.ime+" "+this.prezime;
        
        
    }
dodajIzmene(prezime,roditelj,fakultet,email,telefon){

        this.fakultet=fakultet;
        this.prezime=prezime;
        this.roditelj=roditelj;
        this.email=email;
        this.telefon=telefon;
    }
}