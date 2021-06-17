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