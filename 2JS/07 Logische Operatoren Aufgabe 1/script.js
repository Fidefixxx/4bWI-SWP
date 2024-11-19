/*
Du hast folgende Eingabe "1 2 3 4"
Line 2: n space-separated integer numbers x_1 .. x_n.
Output
sum of even numbers
Constraints
-100 <= x_i <= 100

Example
Input
1 2 3 4
Output
6
*/

let eingabe = "1 2 3 4 5 6 7 8 9 10"
let list = eingabe.split(" ")

let output = 0

for(let i=0;i<list.length;i++){
    if(list[i] % 2==0){
        output+=parseInt(list[i])
    }
}
console.log(output)