alert("Benvenuto! Questo script calcolerà il prezzo totale del tuo viaggio, verranno applicati degli sconti in base all'età.");

const kilometers = parseInt(prompt("Per prima cosa, quanti chilometri vorresti percorrere?"));
const age = parseInt(prompt(`${kilometers} chilometri? D'accordo, quanti anni hai?`));

const ticketPrice = kilometers * 0.21;

alert("Il prezzo totale del biglietto è di: €" + ticketPrice);