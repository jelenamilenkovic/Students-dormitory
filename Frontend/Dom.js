import { Sobe } from "./Sobe.js";

export class Dom{

    constructor(id,naziv, n,m){
        this.id=id;
        this.naziv=naziv;
        this.n=n;
        this.m=m;
        this.kontejner =null;
        this.sobe=[];
    }

    dodajLokaciju(lok){
        this.sobe.push(lok);
    }
   
    crtajDom(host){

        if(!host)
            throw new Exception("Roditeljski element ne postoji");
          this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");  
         host.appendChild(this.kontejner);   
         var eelLabela = document.createElement("h1");
        eelLabela.innerHTML="Studentski dom";
        eelLabela.className="eelabela";
        this.kontejner.appendChild(eelLabela);
        
        
        var podnaslov = document.createElement("h3");
        podnaslov.innerHTML="Unos stanara";
        podnaslov.className="podnaslov";
        this.kontejner.appendChild(podnaslov);
        this.crtajFormu(this.kontejner);
        this.crtajSobe(this.kontejner);
        fetch("https://localhost:5001/Dom/PreuzmiSobe/"+this.id).then(p => {
            p.json().then(data => {
                data.forEach(ss => {
                        this.sobe[ss.x * this.n + ss.y].azurirajsobicu(ss.x,ss.y,ss.id);
                });
            });
        });
    }
    crtajFormu(host){
        const poc=document.createElement("div");
        poc.className="poc";
        host.appendChild(poc);
        const f=document.createElement("div");
        f.className="f";
        const kontForma = document.createElement("div");
        kontForma.className="kontForma";
       
        poc.appendChild(kontForma);
        poc.appendChild(f);
       

       var elLabela = document.createElement("label");
        elLabela.innerHTML="Ime:";
        kontForma.appendChild(elLabela);

        let tb= document.createElement("input");
        tb.className="ime";
        tb.classList.add("imedugme");
        //tb.className="ime";
        kontForma.appendChild(tb);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Prezime:";
        kontForma.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugme","prezime");

        kontForma.appendChild(tb);
      

        elLabela = document.createElement("label");
        elLabela.innerHTML="Fakultet:";
        kontForma.appendChild(elLabela);

         tb= document.createElement("input");
        tb.classList.add("imedugme","fakultet");
        kontForma.appendChild(tb);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Registracioni broj:";
        kontForma.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugme","regbroj");
        tb.type="number";
        kontForma.appendChild(tb);
        const drugiblok=document.createElement("div");
        drugiblok.className="drugiblok";
        

        const treciblok =document.createElement("div");
        treciblok.className="treciblok";
        drugiblok.appendChild(treciblok);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Pol:";
        treciblok.appendChild(elLabela);

        let tipovipola =["muski", "zenski"];
        let tipoviBoja =["lightskyblue", "pink"];
        let slike=["blue.png","pink.png"];

        let opcija=null;
        let labela=null;
        let divRb=null;
        tipovipola.forEach((pp, index)=>{
            divRb = document.createElement("div");
            opcija = document.createElement("input");
            opcija.className="radiob";
            opcija.type="radio";
            opcija.name = this.naziv;
            opcija.value= tipoviBoja[index];

           // labela = document.createElement("label");
           // labela.innerHTML=pp;
            var x = document.createElement("img");
            x.src=slike[index];
            x.style.width="70px";
           //imeGrad.appendChild(x);

            divRb.appendChild(opcija);
            divRb.appendChild(x);
            treciblok.appendChild(divRb);
        })

const selekt=document.createElement("div");
selekt.className="selekt";


        divRb = document.createElement("div");
        let selX= document.createElement("select");
        selX.className="select";
        labela = document.createElement("label");
        labela.innerHTML="Sprat:"
        divRb.appendChild(labela);
        divRb.appendChild(selX);

        for(let i=0; i<this.m;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=i;
            opcija.value=i;
            selX.appendChild(opcija);
        }

        selekt.appendChild(divRb);


        let selY= document.createElement("select");
        selY.className="select";
        labela = document.createElement("label");
        labela.innerHTML=" Broj sobe:"
        divRb.appendChild(labela);
        divRb.appendChild(selY);

        for(let i=0; i<this.n;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=i;
            opcija.value=i;
            selY.appendChild(opcija);
        }

        selekt.appendChild(divRb);
        drugiblok.appendChild(selekt);
        kontForma.appendChild(drugiblok);
        const dd=document.createElement("div");
        dd.className="dd";
        f.appendChild(dd);
        const dugme = document.createElement("button");
        dugme.className="dugme1";
        dugme.innerHTML="Dodaj ";
        dd.appendChild(dugme);
        dugme.onclick=(ev)=>{
            
            const ime = this.kontejner.querySelector(".ime").value;
            console.log(ime);
            const prezime = this.kontejner.querySelector(".prezime").value;
            const fakultet = this.kontejner.querySelector(".fakultet").value;
            const regbroj = parseInt(this.kontejner.querySelector(".regbroj").value);
            const tip = this.kontejner.querySelector(`input[name='${this.naziv}']:checked`);
          

            if(tip==null)
                alert("Molimo Vas izaberite pol");
            
            let x = parseInt(selX.value);
            let y = parseInt(selY.value);

           let potenzijalnaLok=this.sobe.find(lok=>lok.vratiregbrojstanara(regbroj)==true);
          if(potenzijalnaLok)
          alert("Postoji osoba sa istim id! ");
          else{
          fetch("https://localhost:5001/Dom/UpisiStanara/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
                ime: ime,
                prezime: prezime,
                fakultet: fakultet,
                regbroj:regbroj,
                tip:tip.value,
                x:x,
                y:y
                
            })
        }).then(p => {
            if(p.ok){
                this.sobe[x*this.n+y].azurirajSobu(ime,prezime,fakultet, regbroj,tip.value,x,y);
               
            } else if(p.status==400) {
                const greskap= {x:0, y:0};
                p.json().then(r => {
                    greskap.x=r.x;
                    greskap.y=r.y;
                    alert("Soba je popunjena probajte na nekoj drugoj)");
                });
            } else {
                alert("Greška prilikom upisa.");
            }
        }).catch(p => {
            alert("Greška prilikom upisa.");
        });}


     
        }
        const dugme1= document.createElement("button");
        dugme1.className="dugme1";
        dugme1.innerHTML="Obrisi ";
        f.appendChild(dugme1);
        dugme1.onclick=(ev)=>{

            dugme1.style.display="block";
            dugme1.style.display="none";
             elLabela = document.createElement("label");
        elLabela.innerHTML="Registracioni broj:";
        dd.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugme","regb");
        tb.type="number";
        dd.appendChild(tb);
        let sX= document.createElement("select");
        sX.className="select";
        labela = document.createElement("label");
        labela.innerHTML="Sprat:"
        dd.appendChild(labela);
        dd.appendChild(sX);

        for(let i=0; i<this.m;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=i;
            opcija.value=i;
            sX.appendChild(opcija);
        }

        

        let sY= document.createElement("select");
        sY.className="select";
        labela = document.createElement("label");
        labela.innerHTML=" Broj sobe:"
        dd.appendChild(labela);
        dd.appendChild(sY);

        for(let i=0; i<this.n;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=i;
            opcija.value=i;
            sY.appendChild(opcija);
        }

 
        const dug = document.createElement("button");
        dug.innerHTML="obrisi ";
        dug.className="dugme1";
        dd.appendChild(dug);
        dug.onclick=(ev)=>{ let regb = parseInt(this.kontejner.querySelector(".regb").value);
          
            
           let  xx = parseInt(sX.value);
         let   yy = parseInt(sY.value);
        let mm=this.sobe.find(lok=>lok.vratiregbrojstanara(regb)==true&& lok.x==xx && lok.y==yy);
        console.log(mm);
        if(!mm)alert("U trazenoj sobi ne zivi osoba sa tim reg.brojem");
         
         else {

            fetch("https://localhost:5001/Dom/IzbrisiStanara/"+regb+"/"+xx+"/"+yy,{
                method: "DELETE"
            }).then(resp=>{
                if(resp.ok){
                   // location.reload();
                 this.sobe[xx*this.n+yy].obrisistanara(regb,xx,yy);  
                }
             }).catch(err=>{
                  console.log(err);
             });
         }
        
    }
}
}
    crtajSobe(host){

        const kontLokacije = document.createElement("div");
        kontLokacije.className="kontLokacije";
        host.appendChild(kontLokacije);
        let red;
        let lokacija;
        let lok;
        for(let i=0; i<this.m;i++){
            red=document.createElement("div");
            red.className="red";
            kontLokacije.appendChild(red);
            for(let j=0; j<this.n;j++){
                lok = new Sobe(i,j);
                this.dodajLokaciju(lok);
                lok.crtajLokaciju(red,i,j);

            }
        }
    }
}