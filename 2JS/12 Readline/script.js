import { resolve } from "path";
import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            
        });
    });
};


console.log("Hello, what is your name?");
let name = await readLineAsync();
console.log("Your name is " + name);






readline.close();