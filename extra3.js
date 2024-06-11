/* Pedro Henrique Mendes De Jesus
Fazer um programa que lê 10 valores, armazene
em um array, e imprime o maior
e o menor valores lidos.
*/
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(9);
for (var x = 0; x < 10; x++) {
    array1[x] = parseFloat(teclado("Insira os numeros ".concat(x + 1, "\u00B0:  ")));
}
var maior = 0;
var menor = 0;
for (var i = 0; i < 10; i++) {
    if (array1[i] > maior) {
        maior = array1[i];
    }
}
for (var i = 0; i < 10; i++) {
    if (array1[i] < menor || menor == 0) {
        menor = array1[i];
    }
}
console.log("============================");
console.log("|O Maior numero \u00E9: ".concat(maior, "|"));
console.log("|O Menor numero \u00E9: ".concat(menor, "|"));
console.log("============================");
