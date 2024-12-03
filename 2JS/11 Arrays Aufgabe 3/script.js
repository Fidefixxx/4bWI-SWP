/*
Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

Input
5
1 -2 -8 4 5
Output
1
*/
let n = 5;
let temps = [];
for (let i = 0; i < n; i++) {
    temps.push(Math.floor(Math.random() * 100) - 50);
}

let r = temps[0];
for (let i = 1; i < temps.length; i++) {
    if (Math.abs(temps[i]) < Math.abs(r)) {
        r = temps[i];
    }
    else if (Math.abs(temps[i]) == Math.abs(r) && temps[i] > r) {
        r = temps[i];
    }
}

console.log(temps);
console.log(r);

