/*Pedro Henrique Mendes De Jesus 
3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas. */
console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: string [][] = []; //declarando Matriz //
let linha: number = 4; //variavel para controlar linha //
let coluna: number = 1; //variavel para controlar coluna //

// z percorre as linhas  
for (let z = 0; z< linha; z++) {  
    // Cria um array vazio para preencher a linha correspondente ao z  
    minhaMatriz[z] = [];  
    for (let x=0; x <= coluna ; x++) {  
        // Atribuicaao via entrada de dados manual na variavel nome  
        let nome: string = teclado(`Digite o nome que vai estar no endereco [${z}, ${x}]  sda matriz: ;`);  
        // Atribui nome na minhaMatriz do endereço dado por z e x  
        minhaMatriz[z][x]= nome;  
    }  
}  
// Imprime a matriz  
console.log(minhaMatriz); 
