import {Dom} from "./Dom.js"
import {Sobe} from "./Sobe.js"
import {Stanar} from "./Stanar.js"

fetch("https://localhost:5001/Dom/PreuzmiDomove").then(p=>{

p.json().then(data=>{
    alert(data);  
   data.forEach(dom=>{
   const vrt1 = new Dom(dom.id,dom.naziv,dom.n,dom.m);
      vrt1.crtajDom(document.body);  

    
      })
      });
        
    
});




