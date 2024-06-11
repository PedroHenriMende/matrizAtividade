/*Pedro Henrique Mendes De Jesus
7-Crie uma matriz 3x3 com números aleatórios de 0 a 9. Em seguida, exiba a matriz na tela.*/
console.clear();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var z = 0; z <= linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        minhaMatriz[z][x] = Math.floor(Math.random() * 10);
    }
}
console.log(minhaMatriz);
