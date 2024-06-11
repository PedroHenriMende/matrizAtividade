/* Pedro Henrique Mendes De Jesus
Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e 
devolve a média do aluno. */
console.clear();

function calcularMedia(notas: number[]): number {
  let soma: number = 0; // criando variavel

  for (let i = 0; i < notas.length; i++) { // notas = 5
    soma += notas[i];
  }
  return soma / notas.length; // length para ver o tamanho (ultimo)
}

let notas: number[] = []; // array

for (let i = 0; i < 5; i++) {
  const teclado = require (`prompt-sync`)();
  let nota: number = parseFloat(teclado(`Digite a ${i + 1}ª nota do aluno: `));
  notas.push(nota); // adicionar elemento no array
}

console.log(`A média do aluno é: ${calcularMedia(notas)}`);