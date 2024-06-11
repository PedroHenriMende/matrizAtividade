/*Pedro Henrique Mendes De Jesus
8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20. Em seguida, exiba a
matriz na tela e encontre o maior elemento da matriz e a posição em que ele se encontra. */
console.clear();
var minhaMatriz = [];
var linha = 3;
var coluna = 3;
for (var z = 0; z <= linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        minhaMatriz[z][x] = Math.floor(Math.random() * 21);
    }
}
var maiorNum = 0;
var placeLinha = 0;
var placeColuna = 0;
for (var i = 0; i <= linha; i++) {
    for (var x = 0; x <= coluna; x++) {
        if (minhaMatriz[i][x] > maiorNum) {
            maiorNum = minhaMatriz[i][x];
            placeLinha = i;
            placeColuna = x;
        }
    }
}
console.log("Matriz: ");
console.log(minhaMatriz);
console.log("Maior numero \u00E9 ".concat(maiorNum));
console.log("Ele se encontra na posi\u00E7\u00E3o = [".concat(placeLinha, "],[").concat(placeColuna, "]"));
