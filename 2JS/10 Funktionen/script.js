/*
Baue folgende Funktionen:
add(a,b)
subtract(a,b)
mulitply(a,b)
supercalculation(a,b) -> Formel: (a+b)/2 * a
printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.
*/
function add(a,b){return a+b}
function subtract(a,b){return a-b}
function mulitply(a,b){return a*b}
function supercalculation(a,b){return (a+b)/2*a}
function printEasterDate(year){
    n=year-1900
    a=n%19
    b=(7*a+1)/19
    m=(11*a+4-b)%29
    q=n/4
    w=(n+q+31-m)%7
    p=25-m-w
    if(p>0){return parseInt(p)+". April"}
    else{return parseInt(-1*p)+". März"}
}
console.log(printEasterDate(2024))
