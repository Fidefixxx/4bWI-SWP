/*
Aufgabe 1

	Erstelle ein Array mit folgenden Werten:
	4,1,2,3
	Füge die Werte 17 und 199 dazu
	
		a. Gib alle Werte in einer Schleife aus!
		b. Zähle alle Werte zusammen und gib das Ergebnis aus
		c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus
		
*/
let array = [4, 1, 2, 3];
array.push(17, 199);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

let average = sum / array.length;
console.log(average);


/*	
Aufgabe 2

	Erstelle ein Array mit folgenden Strings:
	"Susi", "Paula", "Hans"
	
	Gib folgenden Satz aus:
	"Meine Freunde sind Susi, Paula und Hans
	
	Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
	"Meine Freunde sind Susi, Paula, Hans und Sepp"
*/
let friends = ["Susi", "Paula", "Hans"];
friends.push("Sepp");
console.log("Meine Freunde sind " + friends[0] + ", " + friends[1] + ", " + friends[2] + " und " + friends[3]);


