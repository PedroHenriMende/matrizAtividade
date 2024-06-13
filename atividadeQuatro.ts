/*Pedro Henrique Mendes De Jesus 
4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste. */
console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: number [][] = [];

for (let x =0; x < 3; x++ ){
    minhaMatriz[x] = new Array(3);
    for(let i = 0; i < 4; i++){
        let nome: number = teclado(`Digite os numeros no [${x}, ${i}]`);
        minhaMatriz[x][i] = nome;
    }
}
console.log(minhaMatriz);
