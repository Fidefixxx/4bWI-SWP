//Berechne die Summe der geraden durch die Summe der ungeraden Zahlen
data = []
for (let i = 0; i < Math.random()*100; i++) {
    data.push(Math.floor(Math.random() * 100))
}
let sumEven = 0
let sumOdd = 0
for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) sumEven += data[i]
    else sumOdd += data[i]
}
console.log(data)
console.log(sumEven / sumOdd)
