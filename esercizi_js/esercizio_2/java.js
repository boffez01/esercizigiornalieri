/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let numero = 5;
let numero1 = 10;

if (numero > numero1) {
  console.log(`Il numero più grande è ${numero}`);
} else if (numero < numero1) {
  console.log(`Il numero più grande è ${numero1}`);
} else {
  console.log("I numeri sono uguali.");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const numerointero = 5;
const numerointero1 = 10;
if(numerointero===numerointero1){
  console.log("i numeri sono uguali");
}else {
  console.log("i numeri sono diversi");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
const ndiv = 10;
if( ndiv % 5=== 0){
  console.log("il numero è divisibile per 5");
} else {
  console.log("il numero non è divisibile per 5");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const numint = 6;
const numint1 = 2;
if(numint === 8){
  console.log("il primo numero è 8");
} else if(numint1 === 8){
  console.log("il secondo numero è 8");
} else if (numint-numint1 === 8){
  console.log("la sottrazione da come risultato 8");
} else if(numint+numint1 === 8){
  console.log("la somma dei numeri è 8");
} else{
  console.log("nessun numero combacia con 8 e neache la somma o la sottrazione");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/ let totalShoppingCart= 49;
  const spedizione = 10;
  if(totalShoppingCart>= 50)
  {
    console.log("il totale nel tuo carrello supera 50$, quindi non devi pagare la spedizione");
  } else{
    totalShoppingCart += 10;
    console.log("devi pagare 10 euro per la spedizione, quindi il tuo totale diventa", totalShoppingCart);

  }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart *= 0.8;
if(totalShoppingCart >= 50) {
  console.log("Il totale nel tuo carrello supera 50€, quindi non devi pagare la spedizione.");
} else {
  totalShoppingCart += spedizione; 
  console.log("Devi pagare 10€ per la spedizione, quindi il tuo totale diventa", totalShoppingCart);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const num1 = 12;
const num2 = 3;
const num3 = 16;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2); 
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num2, num1, num3); 
  } else {
    console.log(num2, num3, num1); 
  }
} else {
  if (num1 >= num2) {
    console.log(num3, num1, num2); 
  } else {
    console.log(num3, num2, num1); 
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const valore = 5;
if (typeof valore === 'number') {
  console.log("Il valore è un numero");
} else {
  console.log("Il valore non è un numero");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const numerop = 4;
if (numerop % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'Harshpreet',
  lastName: 'Singh',
  skills: ['javascript', 'html', 'css'],
};
me.city = 'Toronto';
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let array = [];
for (let i = 1; i <= 10; i++) {
  array.push(i);
}
console.log(array);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array[array.length - 1] = 100;
console.log(array);


/* SCRIVI QUI LA TUA RISPOSTA */
