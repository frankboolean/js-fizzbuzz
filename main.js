// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// // Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

var precedente;
var simbolo;

for (var i=1; i < 101; i++) {
  if(i % 3 && i % 5){
    simbolo= i;
    simbolo="frizzbuzz"
    precedente=document.getElementById('msg').innerHTML;
    document.getElementById('msg').innerHTML= precedente + "<li>" + simbolo + "</li>";
  }
  else{
    if(i % 3=== 0)
    simbolo= i;
    simbolo="friz"
    precedente=document.getElementById('msg').innerHTML;
    document.getElementById('msg').innerHTML= precedente + "<li>" + simbolo + "</li>";
  }
  if(i % 5=== 0){
    simbolo= i;
    simbolo="buzz"
    precedente=document.getElementById('msg').innerHTML;
    document.getElementById('msg').innerHTML= precedente + "<li>" + simbolo + "</li>";
  }
}
