import {Dom} from "./Dom.js"
import {Sobe} from "./Sobe.js"
import {Stanar} from "./Stanar.js"

import {Finansije} from "./Finansije.js"
import {Referent} from "./Referent.js"
import {Logovanje} from "./Logovanje.js"

const logovanje=new Logovanje();

const divblok=document.createElement("div");
divblok.className="divblok";
document.body.appendChild(divblok);
fetch("https://localhost:5001/Dom/PreuzmiReferente").then(p=>{

p.json().then(data=>{
   data.forEach(ref=>{
      const lok=new Referent(ref.ime,ref.prezime,ref.email,ref.lozinka);
   logovanje.dodajReferenta(lok);
      });
});
        
    
});
logovanje.crtajlogovanje(document.body);





