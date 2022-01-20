console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listasDeDestinos.push(`Curitiba`); //adicionando item na listagem

console.log(`Destinos possíveis: `);
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listasDeDestinos);

listasDeDestinos.splice(1,1);
console.log(listasDeDestinos);
console.log(listasDeDestinos[1], listasDeDestinos[0]);

