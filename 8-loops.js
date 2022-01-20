console.log(`\nTrabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = `Curitiba`;

console.log(`\nDestinos possíveis: `);
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;
while (contador < listasDeDestinos.length) {
    if (listasDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino Existe: " + destinoExiste);

if(podeComprar && destinoExiste) {
    console.log(`Boa viagem!`);
} else {
    console.log(`Desculpe, ocorreu um erro.`)
}

for(let cont = 0 ; cont < 3 ; cont++) {
    if (listasDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
}