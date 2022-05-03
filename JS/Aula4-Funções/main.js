//Estrutura de uma função
/* 
Function NomedaDuncao(valor1,valor2){
    return valor1 * valor2
}
*/

//funcoes

function addnums(num1 = 2, num2 = 5) {
    return num1 + num2;
}

//console.log(addnums())

//let x = addnums(10,11)
//console.log(x)
// console.clear();

// //  criando arrow function
// const hello = (primeiro = 2, segundo = 2) => {
//     return primeiro * segundo;
// };

// // retornar  o resultado da funcao
// console.log(hello());

// const somaaddnums = (num1 = 2, num2 = 5) => {
//     return num1 + num2;
// };
// console.log(somaaddnums());

// // criando um objetos

// const aluno = {
//     premeiroNome: 'Mellany',
//     segundoNome: 'Diego',
//     idade: '19',
// };
// console.log(aluno());

console.clear();
// evento onload para mostrar mensagem enquanto estiver carregando
const boasVindas = () => {
    alert('Bem-vindo a nossa Página');
    console.log('Bem-vindo a nossa Página');
};
function eventClick() {
    console.log('voce clicou aqui')
}