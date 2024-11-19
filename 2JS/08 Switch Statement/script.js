// Erstelle eine Zufallszahl zwischen 5 und 10
// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc



let rndm = Math.floor(Math.random()*6+5)

switch(rndm){
case 10:
    output = "Ten"
    break;
case 9:
    output = "Nine"
    break;
case 8:
    output = "Eight"
    break;
case 7:
    output = "Seven"
    break;
case 6:
    output = "Six"
    break;
case 5:
    output = "Five"
    break;
} 
console.log(rndm,output)