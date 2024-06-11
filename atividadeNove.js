/*Pedro Henrique Mendes De Jesus
9- Crie uma matriz 6x6 com entrada manual.
Em seguida, calcule e exiba a soma dos elementos das colunas pares da matriz.*/
var teclado = require('prompt-sync')();
var matriz = [];
var linha = 6;
var coluna = 6;
for (var z = 0; z <= linha; z++) {
    matriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        var valor = parseInt(teclado("Digite o valor que vai estar no endereco [".concat(z, ", ").concat(x, "] da matriz: ")));
        matriz[z][x] = valor;
    }
}
console.log("Matriz:");
console.log(matriz);
var soma = 0;
for (var z = 0; z < linha; z++) {
    if (z % 2 === 0) {
        for (var x = 0; x < coluna; x++) {
            soma += matriz[z][x];
        }
    }
}
console.log("Soma dos elementos das linhas pares: ".concat(soma));
