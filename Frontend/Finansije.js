export class Finansije{
    
    constructor(uplata,stanarina,dodatak,nocenje,mesec){
        this.uplata=uplata;
        this.stanarina=stanarina;
        this.dodatak=dodatak;
        this.nocenje=nocenje;
        this.mesec=mesec;
        this.dug=0;
    }

    dodajmasinu(){
        this.dodatak+=70;
        this.dug+=70;
    }
    platimasinu(brojh){
        this.dodatak-=70;
        this.uplata+=70;
    }
    platistanarinu(){
        this.uplata+=2200;
        this.mesec+=1;
    }
    azuriranje(nocenje,uplata,stanarina,dodatak,mesec){
        this.uplata=uplata;
        this.stanarina=stanarina;
        this.dodatak=dodatak;
        this.nocenje=nocenje;
        this.mesec=mesec;
    }
    poslednjimesec(){
        let meseci=["oktobar","novembar","decembar","januar","februar","mart","april","maj","jun","jul","avgust","septembar"];
        return meseci[mesec];
    }
}
