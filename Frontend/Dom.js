import { Sobe } from "./Sobe.js";
import { Kvarovi } from "./Kvarovi.js";
import { Stanar } from "./Stanar.js";
export class Dom{

    constructor(id,naziv,n,m,vremeizvoda){
        this.id=id;
        this.naziv=naziv;
        this.n=n;
        this.m=m;
        this.kontejner =null;
        this.kvarovi=[];
        this.sobe=[];
        this.vremeizvoda=vremeizvoda;
        this.st=[];
    }
    
    dodajLokaciju(lok){
        this.sobe.push(lok);
        
     }
   
    crtajDom(host,ref){

        if(!host) 
            throw new Exception("Roditeljski element ne postoji");
        
        for(let i=0;i<this.n;i++){
            for(let j=0;j<this.m;j++){
                let lok = new Sobe(i,j);
                this.dodajLokaciju(lok);
            }
        }
        fetch("https://localhost:5001/Dom/PreuzmiSobe/"+this.id).then(p => {
            p.json().then(data => {
                data.forEach(ss => {
                this.sobe[ss.x * this.n + ss.y].inicijalizujsobu(ss.x,ss.y,ss.id);
                });
            });
        });
        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");  
        host.appendChild(this.kontejner);   

        const navbar=document.createElement("div");
        navbar.classList.add("navbar");
        const logo=document.createElement("div");
        logo.classList.add("logo");
        const meni=document.createElement("div");
        meni.classList.add("meni");

        const dugmeLogo= document.createElement("img");
        dugmeLogo.src="pngfind.com-education-icon-png-55817.png";
        
        dugmeLogo.className="dugmelogo";
        logo.appendChild(dugmeLogo);
        navbar.appendChild(logo);
        const dugmeDodaj= document.createElement("button");
        dugmeDodaj.className="dugmenav";
        dugmeDodaj.innerHTML="Dodaj stanara";
        meni.appendChild(dugmeDodaj);
        
        const dugmePrikazi= document.createElement("button");
        dugmePrikazi.className="dugmenav";
        dugmePrikazi.innerHTML="Prikaži raspored";
        meni.appendChild(dugmePrikazi);
        const dugmeStanar= document.createElement("button");
        dugmeStanar.className="dugmenav";
        dugmeStanar.innerHTML="Prikaži stanara";
        meni.appendChild(dugmeStanar);
        const dugmePlati= document.createElement("button");
        dugmePlati.className="dugmenav";
        dugmePlati.innerHTML="Finansije";
        meni.appendChild(dugmePlati);
        const dugmeKvarovi= document.createElement("button");
        dugmeKvarovi.className="dugmenav";
        dugmeKvarovi.innerHTML="Prikaži kvarove";
        meni.appendChild(dugmeKvarovi);
        const dugmeOdjava= document.createElement("button");
        dugmeOdjava.className="dugmenav";
        dugmeOdjava.innerHTML="Odjavi se";
        meni.appendChild(dugmeOdjava);
        navbar.appendChild(meni);

        this.kontejner.appendChild(navbar);

        const sredina=document.createElement("div");
        sredina.className="sredina";
        
        const divslika=document.createElement("div");
        const slika=document.createElement("img");
        slika.className="slika";
        divslika.className="divslikaa";
        slika.src="pngkey.com-training-icon-png-3016916.png";
        divslika.appendChild(slika);
        sredina.appendChild(divslika);

        const forme=document.createElement("div");
        forme.classList.add("forme");
        sredina.appendChild(forme); 

        this.kontejner.appendChild(sredina);

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
           // const preuzimanje=document.createElement("div");
           // preuzimanje.className="cl";
           // forme.appendChild(preuzimanje);

        }
        dugmeDodaj.onclick=(ev)=>{
        forme.replaceChildren();
        const preuzimanje=document.createElement("div");
        forme.appendChild(preuzimanje);
        this.crtajFormu(preuzimanje);
        }

        dugmePrikazi.onclick=(ev)=>{
            forme.replaceChildren();
            const prikazivanje=document.createElement("div");
            forme.appendChild(prikazivanje);
            this.crtajSobe(forme);
        }
        dugmePlati.onclick=(ev)=>{
            forme.replaceChildren();
            const finansiranje=document.createElement("div");
            forme.appendChild(finansiranje);
            this.crtajFinansije(forme);
        }
        dugmeStanar.onclick=(ev)=>{
            forme.replaceChildren();
            const informisanje=document.createElement("div");
            forme.appendChild(informisanje);
            this.crtajInformacije(forme);
        }
        dugmeKvarovi.onclick=(ev)=>{
            forme.replaceChildren();
            const popravljanje=document.createElement("div");
            forme.appendChild(popravljanje);
            this.crtajKvarove(forme);
        }

        dugmeOdjava.onclick=(ev)=>{
            forme.replaceChildren();
            location.reload();
        }
    }

    
    
    
    async crtajKvarove(host){
        const poc=document.createElement("div");
        poc.className="poc";
        host.appendChild(poc);
        //poc cine kontForma i f
        const naslov=document.createElement("div");
        naslov.className="naslov";
        naslov.innerHTML="Prijavljeni kvarovi"
        poc.appendChild(naslov);
        let cont=document.createElement("div");
        cont.className="cont";

        fetch("https://localhost:5001/Dom/PreuzmiKvarove").then(p=>{
                p.json().then(data=>{
                   data.forEach(kvar=>{
                    let k = new Kvarovi(kvar.ime,kvar.prezime,kvar.regbroj,kvar.x,kvar.y,kvar.sadrzaj);
                    this.kvarovi.push(k); 
                    let divceokvar=document.createElement("div");
                    divceokvar.className="divceokvar";
                    let divkvara=document.createElement("div");
                    divkvara.className="divkvara";
                     let labela=document.createElement("label");
                    labela.innerHTML="Ime i prezime studenta:"+kvar.ime+" "+kvar.prezime;
                    divkvara.appendChild(labela);
                    labela=document.createElement("label");
                    labela.innerHTML="Registracioni broj studenta:"+kvar.regbroj;
                    divkvara.appendChild(labela);
                    labela=document.createElement("label");
                    labela.innerHTML="Soba:"+kvar.x+kvar.y;
                    divkvara.appendChild(labela);
                    labela=document.createElement("label");
                    labela.innerHTML="Sadržaj:"+kvar.sadrzaj;
                    divkvara.appendChild(labela);
                    divceokvar.appendChild(divkvara);
                    let butk=document.createElement("button");
                    butk.className="dugmenav7";
                    butk.innerHTML="Rešeno";
                    divceokvar.appendChild(butk);
                    butk.addEventListener("click",function(){
                        divceokvar.replaceChildren();
                        fetch("https://localhost:5001/Dom/IzbrisiKvar/"+kvar.regbroj+"/"+kvar.x+"/"+kvar.y,{
                            method: "DELETE"
                        }).then(resp=>{
                            if(resp.ok){
                            //this.sobe[xx*this.n+yy].obrisistanara(regb,xx,yy);  
                            }
                        }).catch(err=>{
                            console.log(err);
                        });

                    })
                    
                    
                    cont.appendChild(divceokvar);
                      });
                      });
                }); 
        poc.appendChild(cont);
        
    }
    

    crtajFinansije(host){
        const poc=document.createElement("div");
        poc.className="finansiranje";
        host.appendChild(poc);
        const prvidiv=document.createElement("div");
        poc.className="prvidiv";
        const drugidiv=document.createElement("div");
        poc.className="drugidiv";
        poc.appendChild(prvidiv);
        poc.appendChild(drugidiv);
        const first=document.createElement("div");
        first.className="first";
        prvidiv.appendChild(first);


        const second=document.createElement("div");
        second.className="second";
        prvidiv.appendChild(second);



        const naslov=document.createElement("label");
        naslov.className="naslov";
        naslov.innerHTML="Obavestiti studente koji kasne sa uplatom:";
        first.appendChild(naslov);
        const dugmemail= document.createElement("button");
        dugmemail.className="dugmenav1";
        dugmemail.innerHTML="Putem maila";
        dugmemail.onclick=(ev)=>{
            var trenutnidatum=new Date();

            var trenutnimesec=trenutnidatum.getMonth()+1;
            var trenutnidan=trenutnidatum.getDate();
            
            if(trenutnidan>=10){
            this.sobe.forEach(element=>{
                for(let i=0;i<2;i++){
                    if(element.stanari[i].regbroj>0){
                        if(trenutnimesec>element.stanari[i].stanjeracuna[0].mesec){
                           var ee=element.stanari[i].email;
                            fetch("https://localhost:5001/Dom/api/Dom/"+ee,{
                                method: "POST"
                            }).then(resp=>{
                                if(resp.ok){
                                 
                                }
                             }).catch(err=>{
                                  console.log(err);
                             });
                        }

                    }
                }
            })}
        }
        second.appendChild(dugmemail);
        const dugmetelefon= document.createElement("button");
        dugmetelefon.className="dugmenav1";
        dugmetelefon.innerHTML="Putem telefona";
        const izmedju=document.createElement("div");
        const labelao=document.createElement("label");
        labelao.className=("naslov");
        labelao.innerHTML="Izvod tekućeg računa";
        izmedju.appendChild(labelao);
        izmedju.className="second";
        const unos=document.createElement("input");
        unos.style.marginTop="1%";
        unos.className="btnpod5";
        unos.type="file";
        unos.id="file";
        unos.addEventListener("change",function(e){
            var f1=document.getElementById("file");

            let filename="./"+f1.value.split("\\").pop();
            var loadingt= pdfjsLib.getDocument(filename).promise.then(function(PDFDocumentInstance){
                var totalPages = PDFDocumentInstance.numPages;
                var pageNumber = 1;
                getPageText(pageNumber, PDFDocumentInstance).then(function(textPage) {
                  
                   let str=textPage;
                   let data=  str.slice((str.indexOf("Cifra")+7));
                   let words =data.split(" ");
                   var datumi=[];
                   var imena=[];
                   var prezime=[];
                   var regbroj=[];
                   var uplata=[];
                   var t=0;
                   for(let i=0;i<words.length;i+=19){
                        datumi[t]=words[i];
                        imena[t]=words[i+9];
                        prezime[t]=words[i+10];
                        regbroj[t]=parseInt(words[i+11]);
                        uplata[t]=parseInt(words[i+17]);
                        t++;
                    }
                let u="Tue Oct 11 2022 20:29:57";
                const ch=new Date(u);
                for(let j=0;j<t;j++){
                var vremeuplate=datumi[j];
                var vremeuplate=vremeuplate.split(/[/,:]/);
               if(vremeuplate[0]>ch.getDate()){
                    fetch("https://localhost:5001/Dom/CitanjeIzvoda/"+regbroj[j] ,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                                  uplata:uplata[j]
                            
                        })
                    }).then(p => {
        
                        if(p.ok){
                          //  if(this.sobe.length>0){
                           // this.sobe.forEach(element=>{
                            //    for(let i=0;i<2;i++){
                                //    if(element.stanari[i].regbroj===regbroj[j]){
                                  //      alert("h");
                                        /*element.stanari[0].stanjeracuna[0].uplata+=uplata[j];
                                        element.stanari[0].stanjeracuna[0].stanarina-=2200;
                                        element.stanari[0].stanjeracuna[0].mesec+=uplata[j]/1800;*/
                                 //   }
                                   
        
                              //  }
                           // });
      //  }
                        }}
                         )
                        .catch(k => {
                     //     alert(k);
                        });
                }
                const vremeizvoda=new Date();
            }
                   
                });
             
             }, function(reason) {
                console.error(reason);
             });
               
        
              function getPageText(pageNum, PDFDocumentInstance) {
                return new Promise(function (resolve, reject) {
                    PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
                        pdfPage.getTextContent().then(function (textContent) {
                            var textItems = textContent.items;
                            var finalString = "";
                                for (var i = 0; i < textItems.length; i++) {
                                var item = textItems[i];
                                finalString += item.str + " ";}
                                resolve(finalString);});
                    });
                });
            }  
        
        },false);
        izmedju.appendChild(unos);
        drugidiv.appendChild(izmedju);
        const first2=document.createElement("div");
        first2.className="first";
        drugidiv.appendChild(first2);
        const naslov2=document.createElement("label");
        naslov2.className="naslov";
        naslov2.innerHTML="Stanje računa";
        first2.appendChild(naslov2);
        const second2=document.createElement("div");
        second2.className="second";
        drugidiv.appendChild(second2);
        const divveci=document.createElement("div");
        divveci.classList="divveci";
        const div2=document.createElement("div");
        div2.classList="div2";
        second2.appendChild(divveci);
        divveci.appendChild(div2);
        let elLabela = document.createElement("label");
        elLabela.innerHTML="Registracioni broj:";
        div2.appendChild(elLabela);
        
        const ob=document.createElement("div");
        ob.className="divveci";
        
        let tb= document.createElement("input");
        tb.classList.add("imedugmenovo","regb");
        tb.placeholder="Upisati registracioni broj studenta:";
        tb.type="number";
        div2.appendChild(tb);
        divveci.appendChild(ob);

        let dugmeinfo=document.createElement("button");
        dugmeinfo.className="btnpod2";
        dugmeinfo.innerHTML="Pretraži";
        const div3=document.createElement("div");
        div3.className="wrapper";
        ob.appendChild(dugmeinfo);
        let y=document.createElement("div");
        drugidiv.appendChild(y);
        dugmeinfo.onclick=(ev)=>{
            
            let regb = parseInt(this.kontejner.querySelector(".regb").value);
            fetch("https://localhost:5001/Dom/PreuzmiFinansije/"+regb).then(p => {
           p.json().then(data => {
                data.forEach(ss => {
                    var month=ss.finansije[0].mesecc;
                    let meseci=["-","januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"];
                   y.replaceChildren();
                    let poc=document.createElement("div");
                    poc.className="poc";
                    y.appendChild(poc);

                    
                    let ttb= document.createElement("input");
                    ttb.id="dugovanje";
                    ttb.readOnly="readonly";
                    ttb.classList.add("imedugmenovo","dugovanje");

                    let tba= document.createElement("input");
                    tba.classList.add("imedugmenovo","uplata");
                    tba.id="uplata";
                     tba.value=ss.finansije[0].uplata;
                     const nulti=document.createElement("div");
                     nulti.className="nulti";
                    poc.appendChild(nulti);
                     var elLabela = document.createElement("label");
                    elLabela.innerHTML="Poslednji uplaćen mesec:";
                    nulti.appendChild(elLabela);
                    tb= document.createElement("input");
                    tb.className="mesec";
                    tb.id="mesec";
                    tb.classList.add("dn");
                    tb.value=meseci[month];
                    nulti.appendChild(tb);


                    const prvi=document.createElement("div");
                    prvi.className="prvi1";
                    poc.appendChild(prvi);
                    const prvilevo=document.createElement("div");
                    prvilevo.className="prvilevo";
                    prvi.appendChild(prvilevo);
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Dodatak:";
                    prvilevo.appendChild(elLabela);
                    tb= document.createElement("input");
                    tb.className="dodatak";
                    tb.readOnly="readonly";
                    tb.id="dodatak";
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.finansije[0].dodatak;
                    prvilevo.appendChild(tb);
                    const prvidesno=document.createElement("div");

                    prvidesno.className="prvidesno";
                    
                   
                    const dugmeplus1=document.createElement("button");
                    dugmeplus1.className="btnpod1";
                    dugmeplus1.innerHTML="+1";
                    prvidesno.appendChild(dugmeplus1);
                    prvi.appendChild(prvidesno);
                    dugmeplus1.onclick=(ev)=>{
                        var myel=document.getElementById("dodatak");
                        myel.value=eval(myel.value)+70;
                        var p=document.getElementById("dugovanje");
                        p.value=eval(p.value)+70;

                    }
                    const prvikraj=document.createElement("div");
                    prvikraj.className="prvidesno";
                   const dugmeplati2=document.createElement("button");
                   prvikraj.appendChild(dugmeplati2);
                    dugmeplati2.className="btnpod1";
                    dugmeplati2.innerHTML="Plati";
                   dugmeplati2.onclick=(ev)=>{
                    if(document.getElementById("dodatak").value>=70){
                        var myel=document.getElementById("dodatak");
                      myel.value-=70;
                      var t=document.getElementById("dugovanje");
                      t.value-=70;
                      var p=document.getElementById("uplata");
                        p.value=eval(p.value)+70;}
                    }
                    prvi.appendChild(prvikraj);


                    const drugi=document.createElement("div");
                    drugi.className="prvi1";
                    poc.appendChild(drugi);
                    const drugilevo=document.createElement("div");
                    drugilevo.className="prvilevo";
                    drugi.appendChild(drugilevo);
                    var elLabela = document.createElement("label");
                    elLabela.innerHTML="Stanarina:";
                    drugilevo.appendChild(elLabela);
                    tb= document.createElement("input");
                    tb.id="stanarina";
                    tb.readOnly="readonly";
                    tb.classList.add("imedugmenovo","stanarina");
                 tb.value=ss.finansije[0].stanarina;
                    drugilevo.appendChild(tb);
                    
                    const drugidesno=document.createElement("div");
                    drugidesno.className="prvidesno";
                    drugi.appendChild(drugidesno);
                    const dugmedodaj2=document.createElement("button");
                    dugmedodaj2.classList.add("btnpod1");
                    
                    dugmedodaj2.innerHTML="Plati";
                    dugmedodaj2.onclick=(ev)=>{
                        if(document.getElementById("stanarina").value>=2200){
                        month=month+1;
                        var mes=document.getElementById("mesec");
                        mes.value=meseci[month];
                        var myell=document.getElementById("stanarina");
                        myell.value=myell.value-2200;
                        var t=document.getElementById("dugovanje");
                        t.value-=2200;
                        var p=document.getElementById("uplata");
                        p.value=eval(p.value)+2200;}
                    }
                    drugidesno.appendChild(dugmedodaj2);

                    const treci=document.createElement("div");
                    treci.className="prvi1";
                    poc.appendChild(treci);
                    const trecilevo=document.createElement("div");
                    trecilevo.className="prvilevo";
                    treci.appendChild( trecilevo);
                    var elLabela = document.createElement("label");
                    elLabela.innerHTML="Noćenje:";
                    trecilevo.appendChild(elLabela);
                    tb= document.createElement("input");
                    tb.id="nocenje";
                    tb.readOnly="readonly";
                    tb.classList.add("imedugmenovo","nocenje");
                     tb.value=ss.finansije[0].nocenje;
                     trecilevo.appendChild(tb);
                    const  trecidesno=document.createElement("div");
                    trecidesno.className="prvidesno";
                    treci.appendChild(trecidesno);
                    const dugmedodaj3=document.createElement("button");
                    dugmedodaj3.classList.add("btnpod1");
                    dugmedodaj3.innerHTML="+1";
                    dugmedodaj3.onclick=(ev)=>{
                        var noc=document.getElementById("nocenje");
                        noc.value=eval(noc.value)+1800;
                        var p=document.getElementById("dugovanje");
                        p.value=eval(p.value)+1800;
                    }
                    trecidesno.appendChild(dugmedodaj3);

                    const  trecikraj=document.createElement("div");
                    trecikraj.className="prvidesno";
                    const dugmeplati3=document.createElement("button");
                    dugmeplati3.classList.add("btnpod1");
                    dugmeplati3.innerHTML="Plati";
                    dugmeplati3.onclick=(ev)=>{
                        if(document.getElementById("nocenje").value>=1800){
                        var nn=document.getElementById("nocenje");
                        nn.value=nn.value-1800;
                       var t=document.getElementById("dugovanje");
                      t.value-=1800;
                        var p=document.getElementById("uplata");
                        p.value=eval(p.value)+1800;}
                    }
                    trecikraj.appendChild(dugmeplati3);
                    treci.appendChild(trecikraj);

                    const cetvrti=document.createElement("div");
                    cetvrti.className="prvi1";
                    

                    poc.appendChild(cetvrti);
                    const cetvrtilevo=document.createElement("div");
                    cetvrtilevo.className="cetvrtidesno";
                    var elLabela = document.createElement("label");
                    elLabela.innerHTML="Ukupan dug:";
                    cetvrtilevo.appendChild(elLabela);
                  
                    ttb.value=eval(document.getElementById("nocenje").value)+eval(document.getElementById("dodatak").value)+eval(document.getElementById("stanarina").value);
                    cetvrtilevo.appendChild(ttb);
                    cetvrti.appendChild(cetvrtilevo);
                    const cetvrtidesno=document.createElement("div");
                    cetvrtidesno.className="cetvrtidesno";
                    var elLabela = document.createElement("label");
                    elLabela.innerHTML="Uplaćeno";
                    cetvrtidesno.appendChild(elLabela);
                   
                    cetvrtidesno.appendChild(tba);
                    cetvrti.appendChild(cetvrtidesno);
                    const cetvrtodugme=document.createElement("button");
                    cetvrtodugme.classList.add("save","btnpod2");
                    cetvrtodugme.innerHTML="Sačuvaj izmene";
                    cetvrti.appendChild(cetvrtodugme);
                    cetvrtodugme.onclick=(ev)=>{
                        {
                            let regb = parseInt(this.kontejner.querySelector(".regb").value);
                            fetch("https://localhost:5001/Dom/IzmeniFinansije/"+regb ,{
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                            nocenje:parseInt(document.querySelector(".nocenje").value),
                                            uplata:parseInt(document.querySelector(".uplata").value),
                                            stanarina:parseInt(document.querySelector(".stanarina").value),
                                            dodatak:parseInt(document.querySelector(".dodatak").value),
                                            mesecc:month
                                        
                                    
                                })
                            }).then(p => {
                
                                if(p.ok){
                                    this.sobe.forEach(element=>{
                                        if(element.vratiregbrojstanara(regb)===true){
                                            if(element.stanari[0].regbroj===regb){
                                                element.stanari[0].azurirajfinansije(parseInt(document.querySelector(".nocenje").value),parseInt(document.querySelector(".uplata").value),parseInt(document.querySelector(".stanarina").value),parseInt(document.querySelector(".dodatak").value),month);
                                            }

                                        }
                                    })

                                     //   this.sobe[x*this.n+y].upisSobe(ime,prezime,fakultet,roditelj,email,telefon, regbroj,tip.value,x,y);
                                }}
                                 )
                                .catch(k => {
                               //   alert(k);
                                });
                            }
                    }
                    
                    
             }
            )})});}
        }
    
    crtajFormu(host){
        let poc=document.createElement("div");
        poc.className="poc";
        host.appendChild(poc);
        const naslov=document.createElement("div");
        naslov.className="naslov";
        naslov.innerHTML="Dodaj stanara"
        poc.appendChild(naslov);

        let kontForma = document.createElement("div");
        kontForma.className="kontForma";
        let f=document.createElement("div");
        f.className="f";

        poc.appendChild(f);
        let leva = document.createElement("div");
        leva.className="leva";
        let desna = document.createElement("div");
        desna.className="desna";

        var elLabela = document.createElement("label");
        elLabela.innerHTML="Ime:";
        leva.appendChild(elLabela);

        let tb= document.createElement("input");
        tb.classList.add("ime","imedugmenovo");
        leva.appendChild(tb);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Prezime:";
        leva.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugmenovo","prezime");
        leva.appendChild(tb);
        elLabela = document.createElement("label");
        elLabela.innerHTML="Email:";
        leva.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugmenovo","email");

        leva.appendChild(tb);
      
        elLabela = document.createElement("label");
        elLabela.innerHTML="Ime roditelja:";
        desna.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugmenovo","roditelj");

        desna.appendChild(tb);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Fakultet:";
        desna.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugmenovo","fakultet");
        desna.appendChild(tb);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Registracioni broj:";
        desna.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugmenovo","regbroj");
        tb.type="number";
        desna.appendChild(tb);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Telefon:";
        desna.appendChild(elLabela);

        tb= document.createElement("input");
        tb.classList.add("imedugmenovo","telefon");
        desna.appendChild(tb);

        kontForma.appendChild(leva);
        kontForma.appendChild(desna);
        const drugiblok=document.createElement("div");
        drugiblok.className="drugiblok";
        

        const treciblok =document.createElement("div");
        treciblok.className="treciblok";
        leva.appendChild(treciblok);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Pol:";
        treciblok.appendChild(elLabela);
        
        f.appendChild(kontForma);
        let tipovipola =["muški", "ženski"];
        let tipoviBoja =["lightskyblue", "pink"];

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

            labela = document.createElement("label");
           labela.innerHTML=tipovipola[index];

            divRb.appendChild(opcija);
            divRb.appendChild(labela);
            treciblok.appendChild(divRb);
        })

const selekt=document.createElement("div");
selekt.className="selekt";


        divRb = document.createElement("div");
        divRb.className="divRb";
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
        leva.appendChild(selekt);
        leva.appendChild(drugiblok);
        const dd=document.createElement("div");
        dd.className="dd";
        const dugme = document.createElement("button");
        dugme.className="btnpod";
        dugme.innerHTML="Dodaj ";
        dd.appendChild(dugme);
        kontForma.appendChild(dd);
        leva.appendChild(drugiblok);
        dugme.onclick=(ev)=>{
            dugme.innerHTML="Dodaj ";
            const ime = kontForma.querySelector(".ime").value;
            const prezime = kontForma.querySelector(".prezime").value;
            const fakultet =kontForma.querySelector(".fakultet").value;
            const roditelj=kontForma.querySelector(".roditelj").value;
            const email=kontForma.querySelector(".email").value;
            const telefon=kontForma.querySelector(".telefon").value;
            const regbroj = parseInt(kontForma.querySelector(".regbroj").value);
            const tip = kontForma.querySelector(`input[name='${this.naziv}']:checked`);
            
            let x = parseInt(selX.value);
            let y = parseInt(selY.value);


            if(this.sobe[x*this.n+y].kapacitet===0 && this.sobe[x*this.n+y].stanari!=[] ){
            fetch("https://localhost:5001/Dom/UpisiSobu/"+this.id ,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    
                    
                    x:x,
                    y:y,
                    kapacitet:1,
                    stanari:[{
                        ime: ime,
                        prezime: prezime,
                        fakultet: fakultet,
                        roditelj:roditelj,
                        email:email,
                        telefon:telefon,
                        regbroj:regbroj,
                        tip:tip.value,
                        x:x,
                        y:y,
                       finansije:[{
                       uplata:19800,
                           stanarina:2200,
                          nocenje:0,
                           dodatak:0,
                            mesecc:9
                      }]  
                      }
                    ]
                    
                })
            }).then(p => {

                if(p.ok){
                        this.sobe[x*this.n+y].upisSobe(ime, prezime,fakultet,roditelj,email,telefon,regbroj,tip.value,x,y,19800,0,2200,0,9);
                      
                    }}
                 )
                .catch(k => {
                 // alert(k);
                });
            }

            else{
            if(tip==null)
                alert("Molimo Vas izaberite pol");
           
           let potenzijalnaLok=this.sobe.find(lok=>lok.vratiregbrojstanara(regbroj)==true);
          if(potenzijalnaLok)
          alert("Postoji osoba sa istim id! ");
          else{
            if(this.sobe[x*this.n+y].kapacitet<2 && this.sobe[x*this.n+y].stanari[0].tip===tip.value ){
          fetch("https://localhost:5001/Dom/UpisiStanara/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
                ime: ime,
                prezime: prezime,
                roditelj:roditelj,
                fakultet: fakultet,
                regbroj:regbroj,
                email:email,
                telefon:telefon,
                tip:tip.value,
                x:x,
                y:y,
                finansije:[{
                    uplata:19800,
                    stanarina:2200,
                    nocenje:0,
                    dodatak:0,
                    mesec:9
                }]  
                
            })
        }).then(p => { 
            if(p.ok){
                this.sobe[x*this.n+y].upisSobe(ime,prezime,fakultet,roditelj,regbroj,email,telefon,tip.value,x,y,19800,0,2200,0,9);
                //this.st.push(new Stanar(ime,prezime,fakultet,roditelj,email,telefon,regbroj,tip.value,selX,selY));
                    } else if(p.status==400) {
                        const greskap= {x:0, y:0};
                        p.json().then(r => {
                        greskap.x=r.x;
                        greskap.y=r.y;
                      //  alert("Soba je popunjena probajte na nekoj drugoj)")
                      ;});} 
            else {
             //   alert(p);
               // alert("Greška prilikom upisaaaa.");
            }
        }).catch(p => {
          //  alert(p);
          //  alert("Greška prilikom upisaaaaaaaa.");
        });}}
} 
}
}
    crtajSobe(host){
        const divraspored = document.createElement("div");
        divraspored.className="divraspored";
        host.appendChild(divraspored);
        const naslov = document.createElement("div");
        naslov.className="naslov";
        naslov.innerHTML="Raspored studenata";
        divraspored.appendChild(naslov);
        const kontLokacije = document.createElement("div");
        kontLokacije.className="kontLokacije";
        kontLokacije.id="mydiv";
        divraspored.appendChild(kontLokacije);
        let red;
        let lokacija;
        let lok;
        for(let i=0; i<this.m;i++){
            red=document.createElement("div");
            red.className="red";
            kontLokacije.appendChild(red);
            for(let j=0; j<this.n;j++){
                lok=this.sobe[i*this.n+j];
                lok.crtajLokaciju(red,i,j);

            }
        }
       if(this.st.length===0){
       this.sobe.forEach(element=>{
        if(element.stanari[0].regbroj>0){
            this.st.push(new Stanar(element.stanari[0].ime,element.stanari[0].prezime,element.stanari[0].fakultet,element.stanari[0].roditelj,element.stanari[0].email,element.stanari[0].telefon,element.stanari[0].regbroj,element.stanari[0].tip.value,element.stanari[0].x,element.stanari[0].y));
        }
            if(element.stanari[1].regbroj>0)
        {
            this.st.push(new Stanar(element.stanari[1].ime,element.stanari[1].prezime,element.stanari[1].fakultet,element.stanari[1].roditelj,element.stanari[0].email,element.stanari[0].telefon,element.stanari[1].regbroj,element.stanari[1].tip.value,element.stanari[1].x,element.stanari[1].y));
        }
        
      }  
      );
    }
        const gg=document.createElement("div");
        gg.className="gg";
        divraspored.appendChild(gg);
        const btnPDF=document.createElement("button");
        btnPDF.className="btnpod1";
        btnPDF.innerHTML="PDF izveštaj";
        //btnPDF.onclick="generatePDF()";
        gg.appendChild(btnPDF);
        
        
btnPDF.onclick=(ev)=>{
    
    var pdfObject = jsPDFInvoiceTemplate.default(props);
    console.log(pdfObject);
}

var props={
    
    outputType: jsPDFInvoiceTemplate.OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Izvestaj studentskog doma",
    orientationLandscape: false,
    compress: true,
    logo: {
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
        type: 'PNG', 
        width: 53.33, 
        height: 26.66,
        margin: {
            top: 0, 
            left: 0 
        }
    },
    stamp: {
        inAllPages: true, 
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: 'JPG', 
        width: 20,
        height: 20,
        margin: {
            top: 0, 
        }
    },
    business: {
        name: "Studentski centar",
        address: "Nis, Kneza Mihajla 86",
        phone: "(+381) 88 55 263",
        email: "sc.nis@gmail.com",
        email_1: "studentski@yahoo.com",
        website: "www.studentskidom.rs",
    },
    contact: {
        label: "Kontakt sluzbe:",
        name: "Studentski dom",
        address: "Nis, Srbija",
        phone: "(+381) 61 494 5555",
        email: "jelenam.jelena@outlook.rs",
        otherInfo: "Diplomski rad",
    },
    invoice: {
        label: "Izvestaj studentskog doma #: ",
        num: 13,
        invDate: "Zahtevan: 12/10/2022 00:07",
        invGenDate: "Izdat: 12/10/2022 00:13",
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "#", 
            style: { 
              width: 10 
            } 
          }, 
          { 
            title: "Ime",
            style: {
              width: 30
            } 
          }, 
          { 
            title: "Prezime",
            style: {
              width: 50
            } 
          }, 
          { title: "Roditelj"},
          { title: "Reg.broj"},
          { title: "Fakultet"},
          { title: "Telefon"}
        ],
        table: Array.from(Array(this.st.length), (item, index)=>([
            index + 1,
            this.st[index].ime ,
            this.st[index].prezime,
            this.st[index].roditelj,
            this.st[index].regbroj,
            this.st[index].fakultet,
            this.st[index].telefon
        ])),
        additionalRows: [{
            col1: 'Total:',
            col2: '145,250.50',
            col3: 'ALL',
            style: {
                fontSize: 14 //optional, default 12
            }
        },
        {
            col1: 'VAT:',
            col2: '20',
            col3: '%',
            style: {
                fontSize: 10 //optional, default 12
            }
        },
        {
            col1: 'SubTotal:',
            col2: '116,199.90',
            col3: 'ALL',
            style: {
                fontSize: 10 //optional, default 12
            }
        }],
        invDescLabel: "Obavestenje",
        invDesc: "Navedeni podaci nisu pouzdani i predstavljaju demo verziju podataka koji se koriste pri izradi diplomskog rada na temu Veb aplikacije za upravljanje studentskim domom studentkinje Jelene Milenkovic."
    },
    footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
};










        
}

crtajInformacije(host){
    const divveliki=document.createElement("div");
    divveliki.className="divveliki";
    host.appendChild(divveliki);
    
    const naslov=document.createElement("div");
    naslov.classList="naslov";
    naslov.innerHTML="Informacije o studentu";
    divveliki.appendChild(naslov);

    const info=document.createElement("div");
    info.className="info";
    divveliki.appendChild(info);

    const divveci=document.createElement("div");
    divveci.classList="divveci";
    const div2=document.createElement("div");
    div2.classList="div2";
    let elLabela = document.createElement("label");
    elLabela.innerHTML="Registracioni broj:";
    div2.appendChild(elLabela);

    let tb= document.createElement("input");
    tb.classList.add("imedugmenovo","regb");
    tb.placeholder="Upisati registracioni broj studenta:"
    tb.type="number";
    div2.appendChild(tb);
    

    let dugmeinfo=document.createElement("button");
    dugmeinfo.className="btnpod2";
    dugmeinfo.innerHTML="Pretraži";
    const div3=document.createElement("div");
    div3.className="wrapper";
    div3.appendChild(dugmeinfo);
    divveci.appendChild(div2);
    divveci.appendChild(div3);
    info.appendChild(divveci);
    const podacidiv=document.createElement("div");
    podacidiv.className="podacidiv";
    info.appendChild(podacidiv);

    dugmeinfo.onclick=(ev)=>{ 
    let regb = parseInt(this.kontejner.querySelector(".regb").value);
    podacidiv.replaceChildren();
    fetch("https://localhost:5001/Dom/PreuzmiInformacije/"+regb).then(p => {
            p.json().then(data => {
               data.forEach(ss => {
                    const poc=document.createElement("div");
                    poc.className="poc";
            
                    const kontForma = document.createElement("div");
                    kontForma.className="kontForma";
            
                    poc.appendChild(kontForma);
                    const leva = document.createElement("div");
                    leva.className="leva";
                    const desna = document.createElement("div");
                    desna.className="desna";
                    var elLabela = document.createElement("label");
                    elLabela.innerHTML="Ime:";
                    leva.appendChild(elLabela);
            
                    let tb= document.createElement("input");
                    //tb.className="ime";
                    tb.classList.add("imedugmenovo","imee");
                    tb.readOnly="readonly";
                    tb.classList.add("imedugmenovo");
                    tb.value=ss.ime;
                    leva.appendChild(tb);
            
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Prezime:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","prezimee");
                    tb.value=ss.prezime;
                    tb.readOnly="readonly";
                    leva.appendChild(tb);
                    
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Email:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","emaill");
                    tb.value=ss.email;
                    tb.readOnly="readonly";
                    leva.appendChild(tb);

                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Sprat:";
                    leva.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","spratt");
                    tb.value=ss.x;
                    tb.readOnly="readonly";
                    leva.appendChild(tb);
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Ime roditelja:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","roditeljj");
                    tb.value=ss.roditelj;
                    tb.readOnly="readonly";
                    desna.appendChild(tb);
            
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Fakultet:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","fakultett");
                    tb.value=ss.fakultet;
                    tb.readOnly="readonly";
                    
                    desna.appendChild(tb);
                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Telefon:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","telefonn");
                    tb.value=ss.telefon;
                    tb.readOnly="readonly";
                    
                    desna.appendChild(tb);

                    elLabela = document.createElement("label");
                    elLabela.innerHTML="Soba:";
                    desna.appendChild(elLabela);
            
                    tb= document.createElement("input");
                    tb.classList.add("imedugmenovo","sobaa");
                    tb.value=ss.y;
                    tb.readOnly="readonly";
                    desna.appendChild(tb);

                    kontForma.appendChild(leva);
                    kontForma.appendChild(desna);
                    const drugiblok=document.createElement("div");
                    drugiblok.className="drugiblok";
                    let opcija1;
                    let opcija2;
                    
                    const selekt=document.createElement("div");
                    selekt.className="selekt";
            
            
                    let divRb = document.createElement("div");
                    let selX= document.createElement("select");
                    
                    selX.id="selx";
                    selX.className="select";
                    let labela = document.createElement("label");
                    labela.innerHTML=ss.x;
                        opcija1=document.createElement("label");
                        opcija1.innerHTML=ss.x;
                        opcija1.className="opcija1";
                        selX.appendChild(opcija1);
            
                    selekt.appendChild(divRb);
            
            
                    let selY= document.createElement("select");
                    selY.className="select";
                    selY.id="sely";
                    labela = document.createElement("label");
                    labela.innerHTML=ss.y;
                        opcija2=document.createElement("label");
                        opcija2.innerHTML=ss.y;
                        opcija2.className="opcija2";
                        selY.appendChild(opcija2);
            
                    selekt.appendChild(divRb);

                    podacidiv.appendChild(poc);

                    const dugmad=document.createElement("div");
                    dugmad.className="dugmad";
                    const dugmebrisanje=document.createElement("button");
                    dugmebrisanje.className="btnpod";
                    dugmebrisanje.innerHTML="Izbriši studenta";
                    const dugmeizmenjivanje=document.createElement("button");
                   dugmeizmenjivanje.className="btnpod";
                    dugmeizmenjivanje.innerHTML="Omogućiti izmene";
                    dugmeizmenjivanje.onclick=(ev)=>{
                        dugmebrisanje.disabled="true";
                        podacidiv.querySelector(".prezimee").removeAttribute("readonly");
                        podacidiv.querySelector(".emaill").removeAttribute("readonly");
                        podacidiv.querySelector(".telefonn").removeAttribute("readonly");
                        podacidiv.querySelector(".roditeljj").removeAttribute("readonly");
                        podacidiv.querySelector(".fakultett").removeAttribute("readonly");
                        dugmeizmenjivanje.innerHTML="Sačuvaj izmene";
                        
                        dugmeizmenjivanje.onclick=(ev)=>{
                        let regb = parseInt(this.kontejner.querySelector(".regb").value);
                        const prezime = this.kontejner.querySelector(".prezimee").value;
                        const roditelj = this.kontejner.querySelector(".roditeljj").value;
                        const fakultet = this.kontejner.querySelector(".fakultett").value;
                        const email = this.kontejner.querySelector(".emaill").value;
                        const telefon = this.kontejner.querySelector(".telefonn").value;
                        let xx = parseInt(selX.value);
                        let yy = parseInt(selY.value);


                         let mm=this.sobe.find(lok=>lok.vratiregbrojstanara(regb)==true&& lok.x==ss.x && lok.y==ss.y);
                         if(!mm)alert("U trazenoj sobi ne zivi osoba sa tim reg.brojem");
         
                         else {

            fetch("https://localhost:5001/Dom/IzmeniStanara/",{
                method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                x:ss.x,
                y:ss.y,
                regbroj:regb,
                prezime:prezime,
                roditelj:roditelj,
                fakultet: fakultet,
                
                email:email,
                telefon: telefon
                
            })
            }).then(resp=>{
                if(resp.ok){
                 this.sobe[ss.x*this.n+ss.y].dodajIzmene(regb,ss.x,ss.y,prezime,roditelj,fakultet,email,telefon);
                }
             }).catch(err=>{
                  console.log(err);
             });
                        }
                        }
                    }
                    dugmebrisanje.onclick=(ev)=>{
                        let regb = parseInt(this.kontejner.querySelector(".regb").value);
                        
                        let xx = parseInt(selX.value);
                        let yy = parseInt(selY.value);
                     //   alert(ss.x);
                      //  alert(ss.y);
                       // alert(regb);
                        let mm=this.sobe.find(lok=>lok.vratiregbrojstanara(regb)==true&& lok.x===parseInt(ss.x) && lok.y===parseInt(ss.y));

                        if(!mm)
                            alert("U trazenoj sobi ne zivi osoba sa tim reg.brojem");
                
                        else {
                            
                            this.sobe[ss.x*this.n+ss.y].obrisistanara(regb,xx,yy); 
                        fetch("https://localhost:5001/Dom/IzbrisiStanara/"+regb+"/"+ss.x+"/"+ss.y,{
                            method: "DELETE"
                        }).then(resp=>{
                            if(resp.ok){
                            //this.sobe[xx*this.n+yy].obrisistanara(regb,xx,yy);  
                            }
                        }).catch(err=>{
                            //console.log(err);
                        });
                        }
                    }
                    leva.appendChild(dugmebrisanje);
                    desna.appendChild(dugmeizmenjivanje);
                   // podacidiv.appendChild(dugmad);

                });
            });
        });

   
    


    
}
}

 

}