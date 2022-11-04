using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
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
            var dom=await Context.Domovi.Where(s=>s.ID==id).Include(p=>p.Sobe).FirstOrDefaultAsync();
            Context.Domovi.Remove(dom);
           await Context.SaveChangesAsync();
        }  
    [Route("IzbrisiStanara/{regbroj}/{x}/{y}")]
        [HttpDelete]
        public async Task<IActionResult> IzbrisiStanara(int regbroj,int x,int y){
            
        var por=await Context.Stanari.Where( s=> s.X==x && s.Y==y && s.Regbroj==regbroj).FirstOrDefaultAsync();
        var so=await Context.Sobe.Where(ss=>ss.X==x && ss.Y==y).FirstOrDefaultAsync();
       var t=await Context.Finansije.Where(ss=>ss.Stanar.Regbroj==regbroj).FirstOrDefaultAsync();

            if(so.Kapacitet<0) return StatusCode(409);
            else{
                Context.Finansije.Remove(t);
                Context.Stanari.Remove(por);
                so.Kapacitet--;
                if(so.Kapacitet==0){
                    Context.Sobe.Remove(so);
                }
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
        [Route("IzbrisiKvar/{regbroj}/{x}/{y}")]
        [HttpDelete]
        public async Task IzbrisiKvar(int regbroj,int x,int y){
            var k=await Context.Kvarovi.Where(s=>s.Regbroj==regbroj && s.X==x && s.Y==y).FirstOrDefaultAsync();
            Context.Kvarovi.Remove(k);
           await Context.SaveChangesAsync();
        }  
        [Route("IzbrisiReferenta/{email}/{sifra}")]
        [HttpDelete]
        public async Task IzbrisiReferenta(string email,string sifra){
            var k=await Context.Referenti.Where(s=>string.Compare(s.Lozinka,sifra)==0 && string.Compare(s.Email,email)==0 ).FirstOrDefaultAsync();
            Context.Referenti.Remove(k);
           await Context.SaveChangesAsync();
        }  
        [Route("UpisiSobu/{idDoma}")]
        [HttpPost]
        public async Task<IActionResult> UpisiSobu(int idDoma,[FromBody]Soba ss){
            var bib = await Context.Domovi.FindAsync(idDoma);
            ss.Dom=bib;
                              
            var odlj = Context.Sobe.Where(o=>o.ID==ss.ID || ( o.X==ss.X && o.Y==ss.Y )).FirstOrDefault();
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
        [Route("UpisiKvar")]
        [HttpPost]
        public async Task UpisiKvar([FromBody]Kvar k){
                Context.Kvarovi.Add(k);
                await  Context.SaveChangesAsync();
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
                //return BadRequest(new { X = xy?.X, Y = xy?.Y });
                return StatusCode(400);
            }

       
            if(sobica.Kapacitet<0)
                return StatusCode(410);

            Context.Stanari.Add(st);
            sobica.Kapacitet++;
            await Context.SaveChangesAsync();
            return Ok();                     
        } 

        [Route("IzmeniStanara")]
        [HttpPost]
        public async Task<IActionResult> IzmeniStanara([FromBody] Stanar st)
        {
     
            var k = Context.Stanari.Where(s=> s.X==st.X && s.Y==st.Y && s.Regbroj==st.Regbroj).FirstOrDefault();
            if(k!=null)
            {
                k.Roditelj=st.Roditelj;
                k.Prezime=st.Prezime;
                k.Fakultet=st.Fakultet;
                k.Email=st.Email;
                k.Telefon=st.Telefon;
                Context.Update<Stanar>(k);
                await Context.SaveChangesAsync();
                return Ok();
            }
            else
                return StatusCode(404);
            
        }       
        [Route("IzmeniFinansije/{regb}")]
        [HttpPost]
        public async Task<IActionResult> IzmeniFinansije([FromBody] Finansije f,int regb)
        {
     
            var k = Context.Finansije.Where(s=>s.Stanar.Regbroj==regb).FirstOrDefault();
            if(k!=null)
            {
                k.Uplata=f.Uplata;
                k.Dodatak=f.Dodatak;
                k.Mesecc=f.Mesecc;
               k.Nocenje=f.Nocenje;
                k.Stanarina=f.Stanarina;
                Context.Update<Finansije>(k);
                await Context.SaveChangesAsync();

                return Ok();
            }
            else
                return StatusCode(404);
            
        }       

        [Route("CitanjeIzvoda/{regb}")]
        [HttpPost]
        public async Task<IActionResult> CitanjeIzvoda([FromBody] Finansije f,int regb)
        {
     
            var k = Context.Finansije.Where(s=>s.Stanar.Regbroj==regb).FirstOrDefault();
            if(k!=null)
            {
                k.Uplata+=f.Uplata;
                k.Mesecc+=f.Uplata/1800;
                k.Stanarina-=2200;
                Context.Update<Finansije>(k);
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
           return await Context.Stanari.Where(ss=>ss.Soba.ID==idSobe).Include(ss=>ss.Finansije).ToListAsync();
            
        }    
        [Route("PreuzmiKvarove")]
        [HttpGet]
        public async Task<List<Kvar>> PreuzmiKvarove()
        {
           return await Context.Kvarovi.ToListAsync();
            
        }
        [Route("PreuzmiFinansije/{regbroj}")]
        [HttpGet]
        public async Task<ActionResult<List<Stanar>>> PreuzmiFinansije(int regbroj)
        {
            var k=Context.Stanari.Where(ss=>ss.Regbroj==regbroj).FirstOrDefault();
            if(k!=null){
           return await Context.Stanari.Where(ss=>ss.Regbroj==regbroj).Include(ss=>ss.Finansije).ToListAsync();
            }
            else return StatusCode(404);
        }  
        [Route("PreuzmiInformacije/{regbroj}")]
        [HttpGet]
        public async Task<List<Stanar>> PreuzmiInformacije(int regbroj)
        {
           return await Context.Stanari.Where(ss=>ss.Regbroj==regbroj).ToListAsync();
            
        }    
        [Route("PreuzmiReferente")]
        [HttpGet]
        public async Task<List<Referent>> PreuzmiReferente()
        {
           return await Context.Referenti.ToListAsync();
            
        }  
        [Route("UpisiReferenta")]
        [HttpPost]
        public async Task UpisiReferenta([FromBody]Referent r){
            Context.Referenti.Add(r);
          await  Context.SaveChangesAsync();
        }

        [Route("api/[controller]/{emailadr}")]
        [HttpPost]
        public IActionResult SendMail(string emailadr){
            var email=new MimeMessage();
            email.From.Add(MailboxAddress.Parse("karlie.swift20@ethereal.email"));
            email.To.Add(MailboxAddress.Parse(emailadr));
            email.Subject="Obaveštenje studentskog doma ";
            email.Body=new TextPart(MimeKit.Text.TextFormat.Html){
                Text="Obaveštavamo Vas da je potrebno da platite račun za stanarinu. Vaš studentski dom"
            };
            using var smtp=new SmtpClient();
            smtp.CheckCertificateRevocation=false;
            smtp.Connect("smtp.ethereal.email",587,MailKit.Security.SecureSocketOptions.StartTls);
            string pass="";
            if(string.Compare(emailadr,"laury.lehner@ethereal.email")==0)
                pass="TBx6wmyf6bKF8DD49Y";
            else if(string.Compare(emailadr,"sid.feest@ethereal.email")==0)
                pass="1krp52JntDnThXJTbc";
            else
                pass="jyT5SBsBVGDM2En2x4";
            smtp.Authenticate(emailadr,pass);
            smtp.Send(email);
            smtp.Disconnect(true);
            return Ok(); }
    }

}
