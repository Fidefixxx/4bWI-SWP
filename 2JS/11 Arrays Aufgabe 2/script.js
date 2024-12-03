/*The program:
Invertiere eine Bitfolge


EXAMPLE:
Input
000111000
Output
111000111
*/

let s = "00011100010101010101010100110100011101001011010101011011111000000011010100"
let r = ""

for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") r += "1"
    else if (s[i] === "1") r += "0"
}
console.log(s)
console.log(r)
