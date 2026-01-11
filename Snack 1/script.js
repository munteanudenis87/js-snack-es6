// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
const bici = [
    {
    nome : "Bicicletta",
    peso : 8,
    },
    {
    nome : "Bicycle",
    peso : 9,
    },
    {
    nome : "Bike",
    peso : 7,
    },
];
const pesoBici = bici.map(p => p.peso);
console.log(`Peso minore ${Math.min(...pesoBici)}`);
