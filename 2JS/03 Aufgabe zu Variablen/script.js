// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banana";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";
// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let avgBananaWeight = 0.22;
// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let avgAppleWeight = 0.34;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
console.log("Anzahl Bananen pro Kilo: " + 1 / avgBananaWeight);
console.log("Anzahl Äpfel pro Kilo: " + 1 / avgAppleWeight);
console.log("Preis pro Banane: " + bananaPricePerKilo / (1 / avgBananaWeight));
console.log("Preis pro Apfel: " + applePricePerKilo / (1 / avgAppleWeight));
// Preis von 8 Äpfeln
console.log("Preis von 8 Äpfeln: " + 8 * applePricePerKilo);
// Preis von 17 Bananen
console.log("Preis von 17 Bananen: " + 17 * bananaPricePerKilo);
// Preis von 1 Tonne Äpfel
console.log(
  "Preis von 1 Tonne Äpfel: " + avgAppleWeight * 1000 * applePricePerKilo
);
// Preis von 1 Tonne Bananen
console.log(
  "Preis von 1 Tonne Bananen: " + avgBananaWeight * 1000 * bananaPricePerKilo
);
