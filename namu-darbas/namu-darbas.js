//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];
console.log("Uzduotis 1");
console.log(mas1.length);
 
//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, '785', 92, 'labas', 522, 6984];
console.log("Uzduotis 2");
for (let i = 0; i<mas2.length; i++) {
    console.log(mas2[i]);
} 
//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];
console.log("Uzduotis 3");
for (let i = 0; i<mas3.length; i++) {
    if (typeof(mas3[i])==='number' && mas3[i]%2==0) {
    console.log(mas3[i]);}
} 
 
//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];

console.log("Uzduotis 4");

//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = 'Storas zebras, bėga nuo zuulu genties nedžiotojų.';
console.log("Uzduotis 5");
let zRaides = /[z]/g;
let zRaidziuPaieska = str1.match(zRaides);
console.log(zRaidziuPaieska.length);
 
//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);
console.log("Uzduotis 6");


//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = 'Ku ku';
// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti
console.log("Uzduotis 7");

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };
console.log("Uzduotis 8");
let keys = Object.keys(obj1);
for (let i = 0; i<keys.length; i++) {
        console.log(keys[i]);}

//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"
console.log("Uzduotis 9");

class Grybas {
    constructor (tipas){
        this.tipas = tipas
    }
}
const grybas1 = new Grybas("Baravykas");
console.log(grybas1);
const grybas2 = new Grybas("Ūmėdė");
console.log(grybas2);
const grybas3 = new Grybas("Lepšis");
console.log(grybas3);
