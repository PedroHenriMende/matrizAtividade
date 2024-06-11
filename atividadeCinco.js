/*Pedro Henrique Mendes De Jesus
5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela. */
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var z = 0; z <= linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        var nome = teclado("Digite o nome que vai estar no endereco [".concat(z, ", ").concat(x, "]  sda matriz: ;"));
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);
