import { Stanar } from "./Stanar.js";

export class Sobe{

    constructor(x,y,id){
        this.id=id;
        this.x=x;
        this.y=y;
        this.kapacitet=0;
        this.minikontejner =null;
        this.stanari=[];
    }

    dodajStanara(lok){
        this.stanari.push(lok);

    }
    vratiregbrojstanara(reg){
        for(let i=0;i<2;i++)
       if( this.stanari[i].vratiregbroj(reg)==1 )
        return true;
    }
    azurirajsobicu(x,y,id){
        this.x=x;
        this.y=y;
        this.id=id;

        fetch("https://localhost:5001/Dom/PreuzmiStanare/"+this.id).then(p => {
            p.json().then(data => {
                data.forEach(ss => {
                        this.azurirajSobu(ss.ime,ss.prezime,ss.fakultet,ss.regbroj,ss.tip,ss.x,ss.y);
                });
            });
        });
    }
    obojisobu(tip){
        this.minikontejner=document.createElement("div");
    }

  
    azurirajSobu(ime, prezime,fakultet,regbroj,tip,x,y){
        
          
        if(this.kapacitet>=2)
        alert("Kapacitet sobe je popunjen");
    else
    {   
        let k=x*10+y;
        if(this.kapacitet==1){
            if(this.stanari[0].tip===tip){
                this.kapacitet++;
                this.minikontejner.style.backgroundColor=tip;
        this.stanari[1].azurirajStanara(ime,prezime,fakultet,regbroj,tip,x,y);}
        else{ if(this.stanari[0].tip==="pink")alert( k+" je zenska soba!"); else 
        alert(k+" je muska soba");
    }
}
    
        else{
        
        this.kapacitet++;
        console.log(this.kapacitet );
        this.minikontejner.style.backgroundColor=tip;
        this.stanari[0].azurirajStanara(ime,prezime,fakultet,regbroj,tip,x,y);

    }


    }     
           
    }

    obrisistanara(regbroj,x,y){
        
        for(let i=0;i<this.kapacitet+1;i++){
        if(this.stanari[i].regbroj==regbroj) {
        this.stanari[i].obrisiStanara("","","","","","","");
        this.kapacitet--;
        console.log(this.kapacitet);
        if(this.kapacitet==0){this.minikontejner.style.backgroundColor="lightgrey";}
    }}
    }
    crtajLokaciju(host,h,j){

    

       this.minikontejner= document.createElement("div");
       this.minikontejner.className="Lokacije";
        this.minikontejner.innerHTML="Soba:"+h+j;
        this.minikontejner.style.backgroundColor="lightgrey";
        host.appendChild(this.minikontejner);
        let red;
        let lokacija;
        let lok;
        for(let i=0; i<2;i++){
            red=document.createElement("div");
            red.className="rr";
            this.minikontejner.appendChild(red);
           
                 lok= new Stanar("","","","","","","");
                this.dodajStanara(lok);
                lok.crtajStanara(red);
                

            }
        
}}