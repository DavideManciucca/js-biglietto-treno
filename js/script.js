let agePass = parseInt(prompt("inserisci quì la tua età"))
let travelLength = parseInt(prompt("inserisci quì la lunghezza della tratta"))
const ticketFee = 0.21

let ticketPrice = ticketFee * travelLength;
console.log("prezzo base",ticketPrice);
let finalCost


if(agePass < 18){
  finalDiscount = ticketPrice * (20 /100);
}
if(agePass >= 65){
  finalDiscount = ticketPrice * (40/100);
}
console.log("Lo sconto da applicare all'importo è di", finalDiscount);

finalCost = ticketPrice - finalDiscount
console.log("Il prezzo finale del biglietto viene", finalCost.toFixed(2));





