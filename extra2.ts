/* Pedro Henrique Mendes de Jesus
Fazer um programa que receba um conjunto de 10 valores 
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
*/

console.clear();

function calcularMedia(valores: number[]): number {
    let soma: number = 0;
    let tamanho: number = valores.length;
  
    for (let i = 0; i < tamanho; i++) {
      soma += valores[i];
    }
  
    return soma / tamanho;
  }
  
  let valores: number[] = new Array(10);
  
  for (let i = 0; i < 10; i++) {
    const teclado = require (`prompt-sync`)();
    valores[i] = parseInt(teclado(`Digite o ${i + 1}º valor:`));
  }

  let media: number = calcularMedia(valores);



  
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === media) {
      console.log(`O valor ${valores[i]} é igual à média.`);
    }
  }