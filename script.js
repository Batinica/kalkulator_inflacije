// console.log("Pozdrav iz console");
// console.error("Pozdrav iz console");
// console.warn("Pozdrav iz console");

/* dvije vrste komentara =>
console.log(5 + 5);
console.log(5 === 5);
console.log(5 === 6);


document.write("Pozdrav sa stranice");


window.alert("Pozdrav iz Popup-a");
window.open(); 


document.getElementById("poruka").innerText = "Pozdrav!!"
*/

/*let cysecor; //definirali smo varijablu

cysecor = "Subscribe na moj kanal"; 

console.log(cysecor); */


//ILI NAPISATI OVAKO


/*
let cysecor = "Subscribe na moj kanal!!"

console.log(cysecor);
*/


/*
let godine = "5";
let mjesec = 3;
let rezultat = godine + mjesec;

console.log(rezultat);  

console.log(typeof(godine));

console.log(typeof(mjesec));

REZULTAT CE BITI 53
*/

/*
let godine = 5;
let mjesec = 3;
let rezultat = godine + mjesec;

console.log(rezultat);

REZULTAT CE BITI 8
*/

/*
let neki_broj = 65;
let drugi_broj = "5";
let rezultat = neki_broj + drugi_broj;

console.log(rezultat);

console.log(typeof(neki_broj));
console.log(typeof(drugi_broj));

drugi_broj = parseInt(drugi_broj);

console.log(drugi_broj);

let rezultat1 = neki_broj + drugi_broj
console.log(rezultat1);
*/

/*
let prvi_broj = 5;
let drugi_broj = 10;
let treci_tnp;

treci_tnp = prvi_broj;

prvi_broj = drugi_broj;

drugi_broj = treci_tnp;


console.log("Prvi broj: " + prvi_broj);
console.log("Drugi broj: " + drugi_broj); 
*/

/*
let ime = "Cysecor";
let prezime = "Sigurnost";
let godine = 12;

console.log("Ja sam " + ime + "." + " Imam " + godine + " godina" + ".") ili možemo napisati ovako:
*/


/*
godine *= 2;
let recenica = "Ja sam " + ime + "." + " Imam " + godine + " godina" + ".";

console.log(recenica);
*/

/*
let recenica = `Ja sam ${ime} i imam ${godine} godina.`;

console.log(recenica);
*/

/*
let prvi_broj = 10;
let drugi_broj = 5;

let treci_broj = 7;
let cetvrti_broj = 8;

console.log(prvi_broj > drugi_broj);

console.log(treci_broj > cetvrti_broj);

console.log((prvi_broj > drugi_broj)&& (treci_broj > cetvrti_broj));

console.log((prvi_broj > drugi_broj) || (treci_broj > cetvrti_broj));
*/

/*
let prvi = 11;
let drugi = 10;

if (prvi < drugi) {
    console.log ("Prvi je manji od drugog");
}
else {
    console.log("Prvi nije manji od drugog");
}
*/


/*
let vrijeme = 19;

if( vrijeme < 10) {
    console.log("Dobro jutro");
} 
else if ( vrijeme < 20) {
    console.log("Dobar dan");
}
else {
    console.log("Dobra vecer")
}


let mjesec = 6;

if (mjesec === 1) {
    console.log("Siječanj");
}
else if (mjesec === 2) {
    console.log("Veljaca");
}
else if (mjesec === 3) {
    console.log("Ožujak");
}
else if (mjesec === 6) {
    console.log("Lipanj");
} 

//ALI IMAMO MOGUCNOST SWITCH-CASE 

switch(mjesec) {
    case 1: 
    console.log("Siječanj");
    break;
    case 2: 
    console.log("Veljača");
    break;
    case 3: 
    console.log("Ozujak");
    break;
    case 4: 
    console.log("Travanj");
    break;
    case 5: 
    console.log("Svibanj");
    break;
    case 6: 
    console.log("Lipanj");
    break;
}
*/

/*
//25 novcanica
let novcanice = 25;

//10 eura vrijednost jedne novcanice
let vrijednost_novcanice = 10;

//brojac
let brojac = 0;

//izbrojane novcanice
let izbrojane_novcanice = 0;

while(brojac < 25) {
    izbrojane_novcanice++;
    console.log(izbrojane_novcanice);
    
    brojac++
}
*/

/*
//a da smo napisali ovako

//25 novcanica
let novcanice = 35; //s obzirom da dole gledamo u odnosu novacice ovdje mozemo bez probema mijenjati vrijednost

//10 eura vrijednost jedne novcanice
let vrijednost_novcanice = 10;


//izbrojane novcanice
let izbrojane_novcanice = 0;

//while-broji novcanice sve dok je brojac manji od broja novcanica
while(izbrojane_novcanice < novcanice) {
   izbrojane_novcanice++
};

console.log(izbrojane_novcanice); 

*/

//let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50];

//let broj_novcanica = novcanice.length;

//let brojac = 0;

/* WHILE PETLJA 
while(brojac < broj_novcanica) {
    console.log("--------");
    console.log("Uvjet prosao");
    console.log(`Novcanice na poziciji ${novcanice[brojac]}`);

    brojac++;
}

console.log("## KRAJ PETLJE ##");

if(brojac < broj_novcanica) {
    console.log("brojac je manji")
}
else ("brojac nije manji");


console.log("brojac = " + brojac);
*/

//FOR PETLJA

/*
let ukupno_novca = 0;
for (let brojac = 0; brojac < broj_novcanica; brojac++) {
    console.log(novcanice[brojac]);

   // ukupno_novca = ukupno_novca + novcanice[brojac];

   ukupno_novca += novcanice[brojac];
}

console.log("###KRAJ###");

console.log("Ukupnp imamo: " + ukupno_novca + " eura.")
*/

/*
for(novcanica of novcanice) {
    console.log(novcanica);
}
*/

//let automobili = ["Audi", "Mercedes", "BMW", "Porsche"];

/*
for(automobil of automobili) {
    console.log(automobil);
}
*/

/*
automobili.forEach(function(automobil) {
    console.log(automobil)
});
*/

let automobili = {
    audi: ["70 000", "2017", "Q7"],
    bmw: ["50 000", "2018", "330D"],
    porsche: ["60 000", "2016", "Boxter"],
    mercedes: ["100 000", "2019", "S400"],
};

/*
for (automobil in automobili) {
    console.log(automobil);
    console.log(automobili[automobil]);
    console.log("-------");
}
*/

/*
for (automobil in automobili) {
    let naziv_auta = automobil;
    console.log(naziv_auta);
    let podaci_vozilo = automobili [automobil];
    console.log (podaci_vozilo);
}
*/

/*
for(automobil in automobili) {
    let naziv = automobil;
    let podaci_vozilo = automobili [automobil];

    console.log(`${naziv} model: ${podaci_vozilo[2]}, godiste: ${podaci_vozilo[1]}, cijena: ${podaci_vozilo[0]} eura.`); 
}
*/

/*
let nekretnine = {
    stan: 70000,
    kuca: 150000,
    zemljiste: 30000,
};
*/   

/*
let godine = 15
let mjeseci = godine * 12;
let rata = nekretnine. stan / mjeseci;
rata = rata.toFixed(2);

console.log(mjeseci + " mjeseci.")
console.log(rata + " eura.");

console.log(`Mjesecna rata za stan iznosi ${rata} na ${godine} godina.`);
*/



//OVA FUNKCIJA IZRACUNAVA MJESECNU RATU ZA ODREDJENU NEKRETNINU NA ODREDENI BROJ GODINA 

/*
function racunanje_mjesecne_rate(godine, vrsta_nekretnine) {
   let mjeseci = godine * 12;
   let rata = nekretnine [vrsta_nekretnine] / mjeseci;


   rata = rata.toFixed(2);


    console.log("-----------------")
    console.log(`Mjesecna rata za ${vrsta_nekretnine} iznosi ${rata} eura na ${godine} godina.`)
    
 
    

};


//PRORACUN ZA STAN NA 15 GODINA
racunanje_mjesecne_rate (15, "stan");

//PRORACUN ZA PLAC NA 5 GODINA
racunanje_mjesecne_rate (5, "zemljiste");

//PRORACUN ZA KUCU NA 20 GODINA
racunanje_mjesecne_rate (20, "kuca");

*/

//let brand = document.getElementsByTagName("span");

/*
console.log(brand[0].innerText);
console.log(brand[1].innerText);
console.log(brand[2].innerText);
*/

//ili mozemo na ovakav nacin dobiti isto

/*
for (let auto of brand) {
    console.log(auto.innerText);
}

let modeli = document.getElementsByClassName("automobil-model");

for (let model of modeli) {
    console.log(model.innerText)
}

let najbolji = document.getElementById("recenica");

console.log(recenica.innerText);
*/

//ILI MOZEMO NAPISATI POMOCU QUERY SELEKTORA


/*
let brend = document.querySelectorAll("span");

for (let auto of brend) {
    console.log(auto.innerText);
}

let modeli = document.querySelectorAll(".automobil-model");

for (let model of modeli) {
    console.log(model.innerText);
}

let najbolji = document.querySelector("#recenica");

console.log(najbolji.innerText); 
*/
 

//brisanje elementa iz html i selekt ID
let recenica = document.querySelector("#recenica");

recenica.remove(); //sluzi za brisanje

 //kreiranje novog elementa

 let novi_el = document.createElement("div");

 novi_el.classList =  "novi-element";

 novi_el.innerHTML = "<hr> Pozdrav!!!";



 let body = document.querySelector("body");

 body.appendChild(novi_el); //NA KRAJU BODY TAGA DODAJEMO NAS NOVI ELEMENT


 




