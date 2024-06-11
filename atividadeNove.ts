/*Pedro Henrique Mendes De Jesus 
9- Crie uma matriz 6x6 com entrada manual. 
Em seguida, calcule e exiba a soma dos elementos das colunas pares da matriz.*/
const teclado = require('prompt-sync')();

let matriz: number[][] = [];
let linha: number = 6;
let coluna: number = 6;

for (let z = 0; z <= linha; z++) {
  matriz[z] = [];
  for (let x = 0; x <= coluna; x++) {
    let valor: number = parseInt(teclado(`Digite o valor que vai estar no endereco [${z}, ${x}] da matriz: `));
    matriz[z][x] = valor;
  }
}

console.log("Matriz:");
console.log(matriz);
let soma: number = 0;
for (let z = 0; z < linha; z++) {
  if (z % 2 === 0) {
    for (let x = 0; x < coluna; x++) {
      soma += matriz[z][x];
    }
  }
}

console.log(`Soma dos elementos das colunas pares: ${soma}`);