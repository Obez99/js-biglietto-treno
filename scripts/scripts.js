alert("Benvenuto! Questo script calcolerà il prezzo totale del tuo viaggio, verranno applicati degli sconti in base all'età.");

const kilometers = parseInt(prompt("Per prima cosa, quanti chilometri vorresti percorrere?"));
if (isNaN(kilometers))
{
  alert("Inserisci un numero valido.");
  location.reload();
}

else{
const age = parseInt(prompt(`${kilometers} chilometri? D'accordo, quanti anni hai?`));
if (isNaN(age))
{
  alert("Inserisci un numero valido.");
  location.reload()
}
else{

const ticketPrice = (kilometers * 0.21);
const under18 = (ticketPrice * 20 / 100);
const over65 = (ticketPrice * 40 / 100);

//Ticket price output
alert("Il prezzo totale del biglietto è di: €" + ticketPrice.toFixed(2));

//Applies discount if age is under 18
if(age < 18){
  alert("Dato che sei minorenne, hai diritto a uno sconto del 20% sul tuo biglietto, pari a €" + under18.toFixed(2));
  alert("Il prezzo finale del tuo biglietto è di €" + (ticketPrice - under18).toFixed(2));
}
//Applies discount if age is over 65
else if(age > 65){
  alert("Dato che sei un over 65, hai diritto a uno sconto del 40% sul tuo biglietto, pari a €" + over65.toFixed(2));
  alert("Il prezzo finale del tuo biglietto è di €" + (ticketPrice - over65).toFixed(2));

}
}
}