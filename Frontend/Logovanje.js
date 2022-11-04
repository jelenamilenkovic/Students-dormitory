import { Referent } from "./Referent.js";
import { Dom } from "./Dom.js";
import{Stanar} from "./Stanar.js";
import{Kvarovi} from "./Kvarovi.js";
export class Logovanje{

    constructor(){
        this.referenti=[];
        this.broj=0;
        this.div1=null;
    }

    dodajReferenta(lok){
        this.referenti.push(lok);
        this.broj++;
    }

    crtajlogovanje(host){
        this.div1=document.createElement("div");
        this.div1.className="div1";
        host.appendChild(this.div1);

        const divLog=document.createElement("div");
        divLog.className="divLog";
        this.div1.appendChild(divLog);

        const divslikaa=document.createElement("div");
        divslikaa.className="divslikaa";
        const slikaa=document.createElement("img");
        slikaa.className="slikaa";
        slikaa.src="pngfind.com-education-icon-png-55817.png";
        divslikaa.appendChild(slikaa);
       // divLog.appendChild(divslikaa);
        
        let labelainitial = document.createElement("label");
        labelainitial.innerHTML="Logovanje:";
        labelainitial.className="naslov";
        labelainitial.className="login";
        divLog.appendChild(labelainitial);

        const divst=document.createElement("div");
        divLog.appendChild(divst);
        divst.className="divst";
        const divg=document.createElement("div");
        divst.appendChild(divg);
        divg.className="divf";
        labelainitial = document.createElement("label");
        labelainitial.innerHTML="REGISTRACIONI BROJ:";
        //divg.appendChild(labelainitial);
    
        let tb= document.createElement("input");
        tb.classList.add("unosform","regb");
        tb.placeholder="Registracioni broj";
        divg.appendChild(tb);
        const logujsest=document.createElement("button");
        logujsest.classList.add("dugmelog","dugme1");
        logujsest.innerHTML="STUDENT";
        divg.appendChild(logujsest);
        logujsest.onclick=(ev)=>{
        let r = this.div1.querySelector(".regb").value;
        
        const divggggg=document.body;
        fetch("https://localhost:5001/Dom/PreuzmiFinansije/"+r).then(p => {
            p.json().then(data => {
                
                data.forEach(ss=>{
                this.div1.replaceChildren();
                divggggg.replaceChildren();
               const kontejner = document.createElement("div");
                kontejner.classList.add("kontejner");  
                divggggg.appendChild(kontejner);   
        
                const navbar=document.createElement("div");
                navbar.classList.add("navbar");
                kontejner.appendChild(navbar);
                const logo=document.createElement("div");
                logo.classList.add("logo");
                navbar.appendChild(logo);
                const meni=document.createElement("div");
                meni.classList.add("meni");
                navbar.appendChild(meni);
                const dugmeLogo= document.createElement("img");
                dugmeLogo.src="pngfind.com-education-icon-png-55817.png";
                dugmeLogo.className="dugmelogo";

                logo.appendChild(dugmeLogo);
                const dugmeStanar=document.createElement("button");
                dugmeStanar.className="dugmenav";
                dugmeStanar.innerHTML="Prikaži profil";
                meni.appendChild(dugmeStanar);
                const dugmeOdjava= document.createElement("button");
                dugmeOdjava.className="dugmenav";
                dugmeOdjava.innerHTML="Odjavi se";
                meni.appendChild(dugmeOdjava);
                const sredina=document.createElement("div");
                sredina.className="sredina";
                const divslika=document.createElement("div");
                const slika=document.createElement("img");
                slika.className="slika";
                slika.src="pngkey.com-training-icon-png-3016916.png";
                divslika.appendChild(slika);
                sredina.appendChild(divslika);
        
                const forme=document.createElement("div");
                forme.classList.add("forme");
                sredina.appendChild(forme); 
        
                kontejner.appendChild(sredina);
                const divgore=document.createElement("div");
                divgore.className="divgore";
                forme.appendChild(divgore);
                const sl=document.createElement("h1");
                sl.innerHTML="Studentski dom"
                sl.className="cl";
                divgore.appendChild(sl);
                let sll=document.createElement("h3");
                sll.innerHTML="Dobrodošli na zvanični sajt studentskog doma u Nišu";
                sll.className="cl";
                divgore.appendChild(sll);
                sll=document.createElement("h4");
                sll.innerHTML="Adresa: Kneza Mihajla 86";
                sll.className="cl";
                divgore.appendChild(sll);
                sll=document.createElement("h4");
                sll.innerHTML="Kontakt telefon: 018 231339";
                sll.className="cl";
                divgore.appendChild(sll);
                dugmeLogo.onclick=(ev)=>{
                    forme.replaceChildren();
                    forme.appendChild(divgore);
            
                    }
                dugmeStanar.onclick=(ev)=>{
                    const poc=document.createElement("div");
                    forme.replaceChildren();
                    poc.className="poc";
                   let  naslov=document.createElement("div");
                    naslov.classList="naslov";
                    naslov.innerHTML="Lični podaci";
                    poc.appendChild(naslov);
                    forme.appendChild(poc);
                    let kontForma = document.createElement("div");
                    kontForma.className="kontForma";
            
                    poc.appendChild(kontForma);
                    let leva = document.createElement("div");
                    leva.className="leva";
                    let desna = document.createElement("div");
                    desna.className="desna";
                    var elLabela = document.createElement("label");
                    elLabela.innerHTML="Ime:";
                    leva.appendChild(elLabela);
            
                    let tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.readOnly="readonly";
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.ime;
                    leva.appendChild(tb);
            
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Prezime:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.prezime;
                    tb.readOnly="readonly";
                    leva.appendChild(tb);
                    
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Email:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.email;
                    tb.readOnly="readonly";
                    leva.appendChild(tb);


                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Ime roditelja:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.roditelj;
                    tb.readOnly="readonly";
                    desna.appendChild(tb);
            
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Fakultet:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.fakultet;
                    tb.readOnly="readonly";
                    
                    desna.appendChild(tb);
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Telefon:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.telefon;
                    tb.readOnly="readonly";
                    
                    desna.appendChild(tb);
                    kontForma.appendChild(leva);
                    kontForma.appendChild(desna);
                    naslov=document.createElement("div");
                    naslov.classList="naslov";
                    naslov.innerHTML="Izvod računa";
                    poc.appendChild(naslov);
                   const kontF = document.createElement("div");
                    kontF.className="kontForma";
            
                    poc.appendChild(kontF);
                     leva = document.createElement("div");
                    leva.className="leva";
                    desna = document.createElement("div");
                    desna.className="desna";
                     elLabela = document.createElement("label");
                    elLabela.innerHTML="Uplaćeno:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","dodatak");
                    tb.readOnly="readonly";
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.finansije[0].uplata;
                    leva.appendChild(tb);
            
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Dug:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","dug");
                    tb.value=ss.finansije[0].stanarina+ss.finansije[0].dodatak+ss.finansije[0].nocenje;
                    tb.readOnly="readonly";
                    desna.appendChild(tb);
                    kontF.appendChild(leva);
                    kontF.appendChild(desna);
                    const divdole=document.createElement("div");
                divdole.className="divdole";
                poc.appendChild(divdole);
                 naslov=document.createElement("div");
                    naslov.classList="naslov";
                    naslov.innerHTML="Dodajte uočeni kvar:";
                    divdole.appendChild(naslov);
                let divh=document.createElement("div");
                divh.className="divh";
                divdole.appendChild(divh);
                const upiskvara=document.createElement("textarea");
                upiskvara.className="upiskvara";
                upiskvara.rows="4";
                divh.appendChild(upiskvara);
                const unoskvara=document.createElement("button");
                unoskvara.className="unoskvara";
                unoskvara.innerHTML="Obavesti referente";
                divh.appendChild(unoskvara);
                unoskvara.onclick=(ev)=>{
                    fetch("https://localhost:5001/Dom/UpisiKvar/", {
                        method: "POST",
                        headers: {  "Content-Type": "application/json" },
                        body: JSON.stringify({
                    
                            ime: ss.ime,
                            prezime: ss.prezime,
                            x:ss.x,
                            y:ss.y,
                            regbroj:ss.regbroj,
                           sadrzaj:kontejner.querySelector(".upiskvara").value
                         })}).then(p => { 
                });
                }
                }
                dugmeOdjava.onclick=(ev)=>{
                    location.reload();
                }
         }); });}); 
    
    
    }

        const divre=document.createElement("div");
        divre.className="divre";
        divLog.appendChild(divre);
        const divf=document.createElement("div");
        divre.appendChild(divf);
        divf.className="divf";
        labelainitial = document.createElement("label");
        labelainitial.innerHTML="EMAIL:";
    
        tb= document.createElement("input");
        tb.classList.add("unosform","email");
        tb.placeholder="EMAIL";
        divf.appendChild(tb);
    
        labelainitial = document.createElement("label");
        labelainitial.innerHTML="PASSWORD:";
    
        tb= document.createElement("input");
        tb.type="password";
        tb.classList.add("unosform","password");
        
        tb.placeholder="PASSWORD";
        divf.appendChild(tb);
    
        const logujse=document.createElement("button");
        logujse.classList.add("dugmelog","dugme1");
        logujse.innerHTML="REFERENT";
        divf.appendChild(logujse);
        logujse.onclick=(ev)=>{
            const e = this.div1.querySelector(".email").value;
            const p = this.div1.querySelector(".password").value;
            
            for(let i=0;i<this.broj;i++){
                if(this.referenti[i].email==e && this.referenti[i].lozinka==p ){
                    this.div1.replaceChildren();
                    fetch("https://localhost:5001/Dom/PreuzmiDomove").then(p=>{
    
                p.json().then(data=>{
                   data.forEach(dom=>{
                   const dom1 = new Dom(dom.id,dom.naziv,dom.n,dom.m,"Tue Oct 11 2022 20:29:57 GMT+0200 (Central European Summer Time)");
                    dom1.crtajDom(document.body,this.referenti[i].ime);  
                      })
                      });
                });
                }
                if((this.referenti[i].email==e && this.referenti[i].lozinka!=p) ||(this.referenti[i].email!=e && this.referenti[i].lozinka==p)){
                    alert("Uneti su pogrešni podaci");
                }
            }
                
        }
        const tekst=document.createElement("div");
        tekst.className="tekst";
        divLog.appendChild(tekst);
    
        labelainitial=document.createElement("label");
        labelainitial.innerHTML="Nisi registrovan?";
        tekst.appendChild(labelainitial);
    
        const regdugme=document.createElement("button");
        regdugme.innerHTML="Registruj se";
        regdugme.className="undugme";
        tekst.appendChild(regdugme);
        regdugme.onclick=(ev)=>{
            this.div1.replaceChildren();
            this.crtajregistrovanje(this.div1);
        }
     }

     crtajprofilstudenta(host,regb){ 
        fetch("https://localhost:5001/Dom/PreuzmiFinansije/"+regb).then(p => {
            p.json().then(data => {
                
                data.forEach(ss=>{
               const kontejner = document.createElement("div");
                kontejner.classList.add("kontejner");  
                host.appendChild(kontejner);   
        
                const navbar=document.createElement("div");
                navbar.classList.add("navbar");
                kontejner.appendChild(navbar);
                const logo=document.createElement("div");
                logo.classList.add("logo");
                navbar.appendChild(logo);
                const meni=document.createElement("div");
                meni.classList.add("meni");
                navbar.appendChild(meni);
                const dugmeLogo= document.createElement("img");
                dugmeLogo.className="dugmelogo";
                logo.appendChild(dugmeLogo);
                
                const dugmeStanar=document.createElement("button");
                dugmeStanar.className="dugmenav";
                dugmeStanar.innerHTML="Prikaži profil";
                meni.appendChild(dugmeStanar);
                const dugmeOdjava= document.createElement("button");
                dugmeOdjava.className="dugmenav";
                dugmeOdjava.innerHTML="Odjavi se";
                meni.appendChild(dugmeOdjava);
                const sredina=document.createElement("div");
                sredina.className="sredina";
                const divslika=document.createElement("div");
                const slika=document.createElement("img");
                slika.className="slika";
                slika.src="pngkey.com-training-icon-png-3016916.png";
                divslika.appendChild(slika);
                sredina.appendChild(divslika);
        
                const forme=document.createElement("div");
                forme.classList.add("forme");
                sredina.appendChild(forme); 
        
                kontejner.appendChild(sredina);
                const divgore=document.createElement("div");
                divgore.className="divgore";
                forme.appendChild(divgore);
                const sl=document.createElement("h1");
                sl.innerHTML="Studentski dom"
                sl.className="cl";
                divgore.appendChild(sl);
                const sll=document.createElement("h3");
                sll.innerHTML="Dobrodošli na zvanični sajt studentskog doma u Nišu";
                sll.className="cl";
                divgore.appendChild(sll);
                dugmeLogo.onclick=(ev)=>{
                    forme.replaceChildren();
                    forme.appendChild(divgore);
            
                    }
                dugmeStanar.onclick=(ev)=>{
                    const poc=document.createElement("div");
                    forme.replaceChildren();
                    poc.className="poc";
                   let  naslov=document.createElement("div");
                    naslov.classList="naslov";
                    naslov.innerHTML="Lični podaci";
                    poc.appendChild(naslov);
                    forme.appendChild(poc);
                    let kontForma = document.createElement("div");
                    kontForma.className="kontForma";
            
                    poc.appendChild(kontForma);
                    let leva = document.createElement("div");
                    leva.className="leva";
                    let desna = document.createElement("div");
                    desna.className="desna";
                    var elLabela = document.createElement("label");
                    elLabela.innerHTML="Ime:";
                    leva.appendChild(elLabela);
            
                    let tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.readOnly="readonly";
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.ime;
                    leva.appendChild(tb);
            
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Prezime:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.prezime;
                    tb.readOnly="readonly";
                    leva.appendChild(tb);
                    
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Email:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.email;
                    tb.readOnly="readonly";
                    leva.appendChild(tb);


                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Ime roditelja:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.roditelj;
                    tb.readOnly="readonly";
                    desna.appendChild(tb);
            
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Fakultet:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.fakultet;
                    tb.readOnly="readonly";
                    
                    desna.appendChild(tb);
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Telefon:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.telefon;
                    tb.readOnly="readonly";
                    
                    desna.appendChild(tb);
                    kontForma.appendChild(leva);
                    kontForma.appendChild(desna);
                    naslov=document.createElement("div");
                    naslov.classList="naslov";
                    naslov.innerHTML="Izvod računa";
                    poc.appendChild(naslov);
                   const kontF = document.createElement("div");
                    kontF.className="kontForma";
            
                    poc.appendChild(kontF);
                     leva = document.createElement("div");
                    leva.className="leva";
                    desna = document.createElement("div");
                    desna.className="desna";
                     elLabela = document.createElement("label");
                    elLabela.innerHTML="Uplaćeno:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","dodatak");
                    tb.readOnly="readonly";
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.finansije[0].uplata;
                    leva.appendChild(tb);
            
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Dug:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","dug");
                    tb.value=ss.finansije[0].stanarina+ss.finansije[0].dodatak+ss.finansije[0].nocenje;
                    tb.readOnly="readonly";
                    desna.appendChild(tb);
                    kontF.appendChild(leva);
                    kontF.appendChild(desna);
                    const divdole=document.createElement("div");
                divdole.className="divdole";
                poc.appendChild(divdole);
                 naslov=document.createElement("div");
                    naslov.classList="naslov";
                    naslov.innerHTML="Dodajte uočeni kvar:";
                    divdole.appendChild(naslov);
                let divh=document.createElement("div");
                divh.className="divh";
                divdole.appendChild(divh);
                const upiskvara=document.createElement("textarea");
                upiskvara.className="upiskvara";
                upiskvara.rows="4";
                divh.appendChild(upiskvara);
                const unoskvara=document.createElement("button");
                unoskvara.className="unoskvara";
                unoskvara.innerHTML="Obavesti referente";
                divh.appendChild(unoskvara);
                unoskvara.onclick=(ev)=>{
                    fetch("https://localhost:5001/Dom/UpisiKvar/", {
                        method: "POST",
                        headers: {  "Content-Type": "application/json" },
                        body: JSON.stringify({
                    
                            ime: ss.ime,
                            prezime: ss.prezime,
                            x:ss.x,
                            y:ss.y,
                            regbroj:ss.regbroj,
                           sadrzaj:kontejner.querySelector(".upiskvara").value
                         })}).then(p => { 
                });
                }
                }
                dugmeOdjava.onclick=(ev)=>{
                    location.reload();
                }
         }); });}); 
     }
     crtajregistrovanje(host){
        const div1=document.createElement("div");
        div1.className="div1";
        host.appendChild(div1);
        const divLog=document.createElement("div");
        divLog.className="divLog";
        div1.appendChild(divLog);
        let labelainitial = document.createElement("label");
        labelainitial.innerHTML="Registracija:";
        labelainitial.className="login";
        divLog.appendChild(labelainitial);
        const divf=document.createElement("div");
        divf.className="divf";
        divLog.appendChild(divf);
        labelainitial = document.createElement("label");
        labelainitial.innerHTML="EMAIL:";
    
        let tb= document.createElement("input");
        tb.classList.add("unosform","emailll");
        tb.placeholder="Email";
        divf.appendChild(tb);
    
        labelainitial= document.createElement("label");
        labelainitial.innerHTML="IME:";
    
        tb= document.createElement("input");
        tb.classList.add("unosform","imeee");
        tb.placeholder="Ime";
        divf.appendChild(tb);
    
        labelainitial= document.createElement("label");
        labelainitial.innerHTML="PREZIME:";
    
        tb= document.createElement("input");
        tb.classList.add("unosform","prezimeee");
        tb.placeholder="Prezime";
        divf.appendChild(tb);
    
        labelainitial= document.createElement("label");
        labelainitial.innerHTML="PASSWORD:";
    
        tb= document.createElement("input");
        tb.type="password";
        tb.classList.add("unosform","password");
        tb.placeholder="Password";
        divf.appendChild(tb);
    
        labelainitial = document.createElement("label");
        labelainitial.innerHTML="PASSWORD:";
    
        tb= document.createElement("input");
        tb.type="password";
        tb.placeholder="Password";
        tb.classList.add("unosform","password2");
        divf.appendChild(tb);
    
        const logujse=document.createElement("button");
        logujse.classList.add("dugmelog","dugme1");
        logujse.innerHTML="Registruj se";
        divLog.appendChild(logujse);
        logujse.onclick=(ev)=>{
            const ime = this.div1.querySelector(".imeee").value;
            const prezime = this.div1.querySelector(".prezimeee").value;
            const email = this.div1.querySelector(".emailll").value;
            const lozinka = this.div1.querySelector(".password").value;
            const lozinka2= this.div1.querySelector(".password2").value;
            let i=0;
            while(i<this.broj && this.referenti[i].email!=email){
                i++;
            }
            if(i===this.broj){
                if(lozinka===lozinka2){
                    fetch("https://localhost:5001/Dom/UpisiReferenta/", {
                    method: "POST",
                    headers: {  "Content-Type": "application/json" },
                    body: JSON.stringify({
                
                        ime: ime,
                        prezime: prezime,
                        email:email,
                        lozinka:lozinka })
        }).then(p => { 
            if(p.ok){
                this.dodajReferenta(new Referent(ime,prezime,email,lozinka));
                this.div1.replaceChildren();
                    fetch("https://localhost:5001/Dom/PreuzmiDomove").then(p=>{
    
                p.json().then(data=>{
                   data.forEach(dom=>{
                   const vrt1 = new Dom(dom.id,dom.naziv,dom.n,dom.m,"Tue Oct 11 2022 20:29:57 GMT+0200 (Central European Summer Time)");
                   vrt1.crtajDom(document.body,ime);  
                })});}); }
             else  {
                    alert("Neuspesno upisivanje");
                }
            });}
        }
                    
    }
        const tekst=document.createElement("div");
        tekst.className="tekst";
        divLog.appendChild(tekst);
    
        labelainitial=document.createElement("label");
        labelainitial.innerHTML="Već imaš nalog?";
        tekst.appendChild(labelainitial);
    
        const regdugme=document.createElement("button");
        regdugme.innerHTML="Uloguj se";
        regdugme.className="undugme";
        tekst.appendChild(regdugme);
        regdugme.onclick=(ev)=>{
            div1.replaceChildren();
            location.reload();
            //this.crtajlogovanje(div1);
        }
     
    }
}