
let age = parseInt(prompt("Inserire età:"))

let kilometer = parseInt(prompt("Inserire kilometri da percorrere:"))

let price = 0.21 * kilometer 
let finalPrice

if(age < 18 ){
    finalPrice = price - (price * 0.20) 
}
else if(age > 65 ){
    finalPrice = price - (price * 0.40)
}
else{
    finalPrice = price
}



document.getElementById("ticket").innerHTML = "Il prezzo del biglietto è " + finalPrice.toFixed(2) + "€" ; 
