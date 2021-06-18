"use strict"

let masyvas = ["bananas ", " oboulys ", " vynuogė"];
console.log(masyvas); // atsakymas console
document.getElementById("rezultatas").innerHTML = masyvas; // atasakymas narsykleje

function pildymas (elementas = 0) {
    masyvas [3] = elementas;
    return masyvas;

}

document.getElementById("prideti").addEventListener("click", function() {
    let elementas = document.getElementById("pildymas").value;
    let rezultatas = pildymas(elementas);
    console.log(rezultatas);
    document.getElementById("rezultatas").innerHTML = rezultatas;

} )

document.getElementById("traukti").addEventListener("click", function() {
let skaicius = document.getElementById("skaicius").value;

document.getElementById("rezultatas1").innerHTML = Math.sqrt(skaicius);


} )