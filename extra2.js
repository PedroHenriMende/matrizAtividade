/* Pedro Henrique Mendes de Jesus
Fazer um programa que receba um conjunto de 10 valores
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
*/
console.clear();
function calcularMedia(valores) {
    var soma = 0;
    var tamanho = valores.length;
    for (var i = 0; i < tamanho; i++) {
        soma += valores[i];
    }
    return soma / tamanho;
}
var valores = new Array(10);
for (var i = 0; i < 10; i++) {
    var teclado = require("prompt-sync")();
    valores[i] = parseInt(teclado("Digite o ".concat(i + 1, "\u00BA valor:")));
}
var media = calcularMedia(valores);
for (var i = 0; i < valores.length; i++) {
    if (valores[i] === media) {
        console.log("O valor ".concat(valores[i], " \u00E9 igual \u00E0 m\u00E9dia."));
    }
}
