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

let kontostand = 0
let running = true

while (running) {
    console.log("Bankomat");
    console.log("1. Einzahlen")
    console.log("2. Abheben")
    console.log("3. Kontostand anzeigen")
    console.log("4. Konto verlassen")

    let selection = await readLineAsync()

    switch (selection) {
        case "1":
            console.log("Einzahlen - Geben Sie den Betrag ein:")
            let einzahlung = Number(await readLineAsync())
            if (isNaN(einzahlung) || einzahlung <= 0) {
                console.log("Ungültiger Betrag!");
            } 
            else {
                kontostand += einzahlung;
                console.log(`${einzahlung}€ wurden eingezahlt.`)
            }
            break;

        case "2":
            console.log("Abheben - Geben Sie den Betrag ein:")
            let abhebung = Number(await readLineAsync())

            if (isNaN(abhebung) || abhebung <= 0) {
                console.log("Ungültiger Betrag!")
            } 
            else if (abhebung > kontostand) {
                console.log("Nicht genügend Guthaben!")
            } 
            else {
                kontostand -= abhebung
                console.log(`${abhebung}€ wurden abgehoben.`)
            }
            break

        case "3":
            console.log(`Ihr Kontostand beträgt: ${kontostand}€`)
            break

        case "4":
            console.log("Auf Wiedersehen!")
            running = false
            break

        default:
            console.log("Ungültige Eingabe")
    }
}

readline.close();