/*Pedro Henrique Mendes De Jesus 
5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela. */

console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: string [][] = [];
let linha: number = 2;
let coluna: number = 2; 

for (let z = 0; z<= linha; z++) {  

    minhaMatriz[z] = [];  
    for (let x=0; x <= coluna ; x++) {  
        let nome: string = teclado(`Digite o nome que vai estar no endereco [${z}, ${x}]  sda matriz: ;`);  
        minhaMatriz[z][x]= nome;  
    }  
}
console.log(minhaMatriz); 