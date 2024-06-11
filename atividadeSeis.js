/*Pedro Henrique Mendes De Jesus
6-Crie uma matriz 3x3 com entrada manual de números aceitando somente
números de 0 a 9. Em seguida, exiba a matriz na tela. */
console.clear();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var z = 0; z <= linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        minhaMatriz[z][x] = Math.floor(Math.random() * 21);
    }
}
console.log(minhaMatriz);
var maior = minhaMatriz[0][0];
var posicao = [0, 0];
for (var z = 0; z < linha; z++) {
    for (var x = 0; x < coluna; x++) {
        if (minhaMatriz[z][x] > maior) {
            maior = minhaMatriz[z][x];
            posicao = [z, x];
        }
    }
}
for (var z = 0; z < linha; z++) {
    for (var x = 0; x < coluna; x++) {
        if (minhaMatriz[z][x] > maior) {
            minhaMatriz[z][x] = maior;
            posicao[1] = z;
            posicao[0] = x;
        }
    }
}
console.log("O maior elemento da matriz \u00E9: ".concat(maior, " e se encontra na posi\u00E7\u00E3o [").concat(posicao[0], ", ").concat(posicao[1], "]"));
console.log(minhaMatriz);
