/*Pedro Henrique Mendes De Jesus
4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste. */
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
for (var x = 0; x < 3; x++) {
    minhaMatriz[x] = new Array(3);
    for (var i = 0; i < 4; i++) {
        var nome = teclado("Digite os numeros no [".concat(x, ", ").concat(i, "]"));
        minhaMatriz[x][i] = nome;
    }
}
console.log(minhaMatriz);

