/*Pedro Henrique Mendes De Jesus 
3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas. */
console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: string [][] = [];
let linha: number = 1; 
let coluna: number = 1;

for (let z = 0; z<= linha; z++) {  
    minhaMatriz[z] = [];  
    for (let x=0; x <= coluna ; x++) {  
        let nome: string = teclado(`Digite o nome que vai estar no endereco [${z}, ${x}]  sda matriz: ;`);  
        minhaMatriz[z][x]= nome;  
    }  
}  
console.log(minhaMatriz); 