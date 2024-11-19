/*
Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
X X X X 
O O O O 
X X X X 
O O O O 
*/

let rndm = Math.floor(Math.random()*6+5)

let width = 7
let height = 7

for(let i = 0; i<height;i++){
    if(i%2==0){
        console.log("X ".repeat(width))
    }
    else{
        console.log("O ".repeat(width))
    }
}
console.log("---------------------------------------------")
/*
Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren
(zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)
*/ 
let sum = 0
for(let i = 1;i<=100;i++){
    if(i%2==0){
        sum+=i
    }
}
console.log(sum)