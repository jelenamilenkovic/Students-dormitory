using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DomController : ControllerBase
    {
        public DomContext Context{get;set;}
        public DomController(DomContext context)
        {
            Context=context;
        }
        [Route("PreuzmiDomove")]
        [HttpGet]
        public async Task<List<Dom>> PreuzmiDomove(){
            return await Context.Domovi.Include(p=>p.Sobe).ToListAsync();
        }
        
       [Route("UpisiDom")]
        [HttpPost]
        public async Task UpisiDom([FromBody]Dom dom){
            Context.Domovi.Add(dom);
          await  Context.SaveChangesAsync();
        }
        [Route("IzmeniDom")]
        [HttpPut]
        public async Task IzmeniDom([FromBody]Dom dom){
           Context.Update<Dom>(dom);
           await Context.SaveChangesAsync();
        }

        [Route("IzbrisiDom/{id}")]
        [HttpDelete]
        public async Task IzbrisiDom(int id){
            var dom=await Context.Domovi.FindAsync(id);
            Context.Remove(dom);
           await Context.SaveChangesAsync();
        }  
    [Route("IzbrisiStanara/{regbroj}/{x}/{y}")]
        [HttpDelete]
        public async Task<IActionResult> IzbrisiStanara(int regbroj,int x,int y){
            
        var por=await Context.Stanari.Where( s=> s.X==x && s.Y==y && s.Regbroj==regbroj).FirstOrDefaultAsync();
        var so=await Context.Sobe.Where(ss=>ss.X==x && ss.Y==y).FirstOrDefaultAsync();

            if(so.Kapacitet<=0) return StatusCode(409);
            else{
            Context.Stanari.Remove(por);
            //so.Kapacitet--;
            await Context.SaveChangesAsync();
            return Ok();
            }

        }  
       [Route("IzbrisiSobe/{id}")]
        [HttpDelete]
        public async Task IzbrisiSobe(int id){
            var ss=await Context.Sobe.FindAsync(id);
           // Context.Remove(ss.Stanari);
            Context.Remove(ss);
            
           await Context.SaveChangesAsync();
        }  
        [Route("UpisiSobu/{idDoma}")]
        [HttpPost]
        public async Task<IActionResult> UpisiSobu(int idDoma,[FromBody]Soba ss){
            var bib = await Context.Domovi.FindAsync(idDoma);
            ss.Dom=bib;
                              
            var odlj = Context.Sobe.Where(o=>o.ID==ss.ID || (o.X==ss.X && o.Y==ss.Y)).FirstOrDefault();
            if(odlj!=null)
            {
                return StatusCode(406);
            }
            else if(ss.X>bib.N||ss.Y>bib.M)
            {
               return StatusCode(407);
            }
            else
            {
                Context.Sobe.Add(ss);
                await Context.SaveChangesAsync();
                return Ok();
            }
        }
        [Route("PreuzmiSobe/{idDoma}")]
        [HttpGet]
        public async Task<List<Soba>> PreuzmiSobe(int idDoma)
        {
            return await Context.Sobe.Where(ss=>ss.Dom.ID==idDoma).Include(ss=>ss.Stanari).ToListAsync();
        }

        [Route("UpisiStanara")]
        [HttpPost]
        public async Task<IActionResult> UpisiStanara([FromBody] Stanar st)
        {
            var sobica = await Context.Sobe.Where(ss=>ss.X==st.X && ss.Y==st.Y).FirstOrDefaultAsync();
            st.Soba = sobica;          
            if (Context.Stanari.Any(p => p.Regbroj == st.Regbroj && (p.X != st.X || p.Y != st.Y)))
            {
                var xy = Context.Stanari.Where(p => p.Regbroj == st.Regbroj).FirstOrDefault();
                return BadRequest(new { X = xy?.X, Y = xy?.Y });
            }

       
            if(sobica.Kapacitet<0)
                return StatusCode(410);

            Context.Stanari.Add(st);
            sobica.Kapacitet++;
            await Context.SaveChangesAsync();
            return Ok();                     
        } 

        [Route("IzmeniStanara/{idSobe}")]
        [HttpPut]
        public async Task<IActionResult> IzmeniStanara(int idSobe,[FromBody] Stanar st)
        {
     
            var k = Context.Stanari.Where(p=>p.Soba.ID==idSobe && p.X==st.X && p.Y==st.Y && p.Regbroj==st.Regbroj).FirstOrDefault();
            if(k!=null)
            {
              //  k.Fakultet=st.Kolicina;
                Context.Update<Stanar>(st);
                await Context.SaveChangesAsync();
                return Ok();
            }
            else
                return StatusCode(404);
            
        }       

        [Route("PreuzmiStanare/{idSobe}")]
        [HttpGet]
        public async Task<List<Stanar>> PreuzmiStanare(int idSobe)
        {
           return await Context.Stanari.Where(ss=>ss.Soba.ID==idSobe).ToListAsync();
            
        }    
    }

}
