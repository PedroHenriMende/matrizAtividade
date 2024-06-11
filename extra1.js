/* Pedro Henrique Mendes De Jesus
Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e
devolve a média do aluno. */
console.clear();
function calcularMedia(notas) {
    var soma = 0; // criando variavel
    for (var i = 0; i < notas.length; i++) { // notas = 5
        soma += notas[i];
    }
    return soma / notas.length; // length para ver o tamanho (ultimo)
}
var notas = []; // array
for (var i = 0; i < 5; i++) {
    var teclado = require("prompt-sync")();
    var nota = parseFloat(teclado("Digite a ".concat(i + 1, "\u00AA nota do aluno:")));
    notas.push(nota); // adicionar elemento no array
}
console.log("A m\u00E9dia do aluno \u00E9: ".concat(calcularMedia(notas)));
