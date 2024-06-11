/*Pedro Henrique Mendes De Jesus 
8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20. Em seguida, exiba a 
matriz na tela e encontre o maior elemento da matriz e a posição em que ele se encontra. */

console.clear();

let minhaMatriz: number [][] = []; 

let linha: number = 3; 
let coluna: number = 3; 
 
for (let z = 0; z <= linha; z++) {  
    minhaMatriz[z] = [];  
    for (let x=0; x <= coluna ; x++) {  
        minhaMatriz[z][x] = Math.floor(Math.random() * 21);  
    }  
}  

let maiorNum: number = 0;
let placeLinha: number = 0;
let placeColuna: number = 0;

for(let i =0; i <= linha; i++){
    for(let x = 0; x <= coluna; x++){
        if(minhaMatriz[i][x] > maiorNum){
            maiorNum = minhaMatriz[i][x];
            placeLinha = i;
            placeColuna = x;
        }
    }
}

console.log("Matriz: ");
console.log(minhaMatriz);
console.log(`Maior numero é ${maiorNum}`);
console.log(`Ele se encontra na posição = [${placeLinha}],[${placeColuna}]`);