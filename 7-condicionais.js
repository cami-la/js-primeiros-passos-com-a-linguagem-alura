console.log(`Trabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = false;

console.log(`Destinos possíveis: `);
console.log(listasDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Boa viagem!!`);
    listasDeDestinos.splice(1, 1); //removendo item
} else if (estaAcompanhada) {
    listasDeDestinos.splice(1, 1); //removendo item    
} else {
    console.log(`Comprador não é maior de idade e não posso vender.`);
}

console.log("Embarque:  \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!")
} else {
    console.log("Você não pode embarcar!")
}


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

console.log(listasDeDestinos);