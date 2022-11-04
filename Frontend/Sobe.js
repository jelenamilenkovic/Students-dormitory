import { Stanar } from "./Stanar.js";

export class Sobe{

    constructor(x,y,id){
        this.id=id;
        this.x=x;
        this.y=y;
        this.kapacitet=0;
        this.minikontejner =null;
        this.stanari=[];
        this.stanari.push(new Stanar("","","","","","",0,"lightgrey","",""));
        this.stanari.push(new Stanar("","","","","","",0,"lightgrey","",""));
    }

    dodajStanara(lok){
        this.stanari.push(lok);

    }
    vratiregbrojstanara(reg){
       if( this.stanari[0].regbroj===reg || this.stanari[1].regbroj===reg  )
        return true;
    }
    inicijalizujsobu(x,y,id){
        this.x=x;
        this.y=y;
        this.id=id;
        fetch("https://localhost:5001/Dom/PreuzmiStanare/"+this.id).then(p => {
            p.json().then(data => {
                data.forEach(ss => {
                        this.upisSobe(ss.ime,ss.prezime,ss.fakultet,ss.roditelj,ss.email,ss.telefon,ss.regbroj,ss.tip,ss.x,ss.y,ss.finansije[0].uplata,ss.finansije[0].dodatak,ss.finansije[0].stanarina,ss.finansije[0].nocenje,ss.finansije[0].mesecc);
                    });
            });
        });
    }



    obojisobu(tip){
        this.minikontejner=document.createElement("div");
        this.minikontejner.style.backgroundColor=tip;
    }

  
    upisSobe(ime, prezime,fakultet,roditelj,email,telefon,regbroj,tip,x,y,uplata,dodatak,stanarina,nocenje,mesec){
        
          
    if(this.kapacitet>=2)
            alert("Kapacitet sobe je popunjen");
    else
        {   
            let k=x*10+y;
            if(this.kapacitet==1){ //ako ima vecc jednog stanara
                if(this.stanari[0].tip===tip){ 
                    this.kapacitet++;
                    this.stanari[1].ime=ime;
                    this.stanari[1].prezime=prezime;
                    this.stanari[1].regbroj=regbroj;
                    this.stanari[1].fakultet=fakultet;
                    this.stanari[1].email=email;
                    this.stanari[1].telefon=telefon;
                    this.stanari[1].roditelj=roditelj;
                    this.stanari[1].x=x;
                    this.stanari[1].y=y;
                    this.stanari[1].tip=tip;
                    this.stanari[1].stanjeracuna[0].uplata=uplata;
                    this.stanari[1].stanjeracuna[0].stanarina=stanarina;
                    this.stanari[1].stanjeracuna[0].nocenje=nocenje;
                    this.stanari[1].stanjeracuna[0].dodatak=dodatak;
                    this.stanari[1].stanjeracuna[0].mesec=mesec;
                    this.stanari[1].azurirajStanara(ime,prezime,fakultet,roditelj,email,telefon,regbroj,tip,x,y,uplata,dodatak,stanarina,nocenje,mesec);
                    this.obojisobu(tip);}
                else{ 
                    if(this.stanari[0].tip==="pink") //promasen pol stanara
                        alert( k+" je zenska soba!"); 
                    else 
                        alert(k+" je muska soba");} }
        
            else{                   //ako nema vise stanara
                    this.kapacitet++; //ako nema nijednog stanara
                    this.stanari[0].ime=ime;
                    this.stanari[0].prezime=prezime;
                    this.stanari[0].regbroj=regbroj;
                    this.stanari[0].fakultet=fakultet;
                    this.stanari[0].email=email;
                    this.stanari[0].telefon=telefon;
                    this.stanari[0].roditelj=roditelj;
                    this.stanari[0].x=x;
                    this.stanari[0].y=y;
                    this.stanari[0].tip=tip;
                    this.stanari[0].stanjeracuna[0].uplata=uplata;
                    this.stanari[0].stanjeracuna[0].stanarina=stanarina;
                    this.stanari[0].stanjeracuna[0].nocenje=nocenje;
                    this.stanari[0].stanjeracuna[0].dodatak=dodatak;
                    this.stanari[0].stanjeracuna[0].mesec=mesec;
                    this.stanari[0].azurirajStanara(ime,prezime,fakultet,roditelj,email,telefon,regbroj,tip,x,y,uplata,dodatak,stanarina,nocenje,mesec);
                    this.obojisobu(tip);   }


         }        
           
    }

    obrisistanara(regbroj,x,y){
        
        for(let i=0;i<this.kapacitet+1;i++){
            if(this.stanari[i].regbroj===regbroj) {
                this.stanari[i].obrisiStanara("","","","","","","","","","");
                this.kapacitet--;} 
        if(this.kapacitet===0){    
         //    alert(this.kapacitet);  
            this.minikontejner.style.backgroundColor="lightgray";}
                                                  }
    }
    
    dodajIzmene(regb,xx,yy,prezime,roditelj,fakultet,email,telefon){
        for(let i=0;i<this.kapacitet+1;i++){
            if(this.stanari[i].regbroj==regb) {
                this.stanari[i].dodajIzmene(prezime,roditelj,fakultet,email,telefon);
    }
}}
    crtajLokaciju(host,h,j){

    

       this.minikontejner= document.createElement("div");
       this.minikontejner.className="Lokacije";
        this.minikontejner.innerHTML="Soba:"+h+j;

        //this.minikontejner.style.backgroundColor="lightgray";
        host.appendChild(this.minikontejner);
        let red;
        let lokacija;
        let lok;
        for(let i=0; i<2;i++){
            red=document.createElement("div");
            red.className="rr";
            this.minikontejner.appendChild(red);
                lok=this.stanari[i];
                if(this.stanari[0].tip==="lightgray")
                   { this.minikontejner.style.backgroundColor=this.stanari[1].tip;}
                else{this.minikontejner.style.backgroundColor=this.stanari[0].tip;}
                //this.minikontejner.style.backgroundColor=this.stanari;
                //lok= new Stanar("","","","","","","","");
                //this.dodajStanara(lok);
                lok.crtajStanara(red);
                

            }
        
}}