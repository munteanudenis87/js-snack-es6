// Creare un array di oggetti di squadre.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti fatti” e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const squadre = [
    {
    nome : "Verdi",
    puntiFatti : 0,
    falliSubiti : 0,
    },
    {
    nome : "Gialli",
    puntiFatti : 0,
    falliSubiti : 0,
    },
    {
    nome : "Rossi",
    puntiFatti : 0,
    falliSubiti : 0,
    },
];

for (let index = 0; index < squadre.length; index++) {
    squadre[index].puntiFatti = getRandomInt(1,15);
    squadre[index].falliSubiti = getRandomInt(0,12);
    console.log(squadre[index].nome, "Punti fatti", squadre[index].puntiFatti, "Falli subiti", squadre[index].falliSubiti);  
};


function getRandomInt(min, max){
  return Math.floor( Math.random() * (max - min + 1) + min);
}
const squadreFs = squadre.map(user => ({
  nomeSquadra: user.nome,
  falliSubitiFs: user.falliSubiti
}));
console.log(squadreFs);
