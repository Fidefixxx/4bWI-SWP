// erstelle eine Variable number
let num1 = 60
let ausgabe1 = ""
// Aufgabe 1
// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
// Wenn die Zahl größer als 50 ist gib aus "Large"
if(num1 < 20){
    ausgabe1 = "mini"
}
else if(20<=num1 && num1<=50){
    ausgabe1 = "medium"
}
else if(num1 > 50){
    ausgabe1 = "Large"
}

console.log("Num1: ",num1,"->", ausgabe1)



// Aufgabe 2
// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
// Wenn die Zahl zwischen 7 und 90 ist gib  aus "Medium"
// Wenn die Zahl größer als 90 ist gib aus "Large"
let num2 = 7
let ausgabe2 = ""

if(num2 <= 7){
    ausgabe2 = "mini"
}
else if(7<num2 && num2<=90){
    ausgabe2 = "medium"
}
else if(num2 > 90){
    ausgabe2 = "Large"
}

console.log("Num2: ",num2,"->", ausgabe2)


