//RICHIESTE
/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// 1. Imposto variabile che fa scegliere il numero di chilometri all'utente
let myDistance = Number(prompt(`Scegli il numero di chilometri da percorrere:`));
console.log(`I chilometri percorsi sono: ${myDistance}`);

// 2. Imposto variabile che fa scegliere l'età
const age = Number(prompt(`Imposta la tua età:`));
console.log(`La tua età è di: ${age} anni`);

// 3. Imposto il prezzo del biglietto
let trainPrice = myDistance * 0.21
console.log(`Il prezzo totale del biglietto è di: ${trainPrice}€`);
