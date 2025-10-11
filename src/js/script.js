// como declarar uma variavel undefined, com valor e sem valor

// Váriavel sem valor
let x;
console.log(x);

// Váriavel com valor
let y = 10;
console.log(y);

// Váriavel com valor undefined
let z = undefined;
console.log(z);




// Como usar o operador os operadores( != , ==, >= ) em JavaScript. Operadores booleanos.

// x é igual à undefined
console.log(x == undefined);

// y é diferente de z
console.log(y != z);

// y é maior ou igual a 10
console.log(y >= 10);




// programa de calcular IMC (Índice de Massa Corporal)

// peso em kg
let peso = 90;

// altura em metros
let altura = 1.75;

// calculo do IMC
let imc = peso / (altura * altura);

// Switch case para classificar o IMC
switch (true) {
    case (imc < 18.5):
        console.log("Você está abaixo do peso ideal");
        break;
    case (imc >= 18.5 && imc < 24.9):
        console.log("Você está no peso ideal");
        break;
    case (imc >= 25 && imc < 29.9):
        console.log("Você está acima do peso ideal");
        break;
}



// Verificação de Login

// Usuário e senha cadastrados
let usuario = "admin";
let senha = "1234";

// Entrada de dados
let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

// Verificação com switch
switch (true) {
    case (usuario === usuario && senha === senha):
        console.log("Login realizado com sucesso!");
        alert("Login realizado com sucesso!");
        break;

    default:
        console.log("Falha na autenticação! Usuário ou senha incorretos.");
        alert("Falha na autenticação! Usuário ou senha incorretos.");
        break;
}



// Repetição até 50 usando for

// Inicialização da variável de controle
let i = 0;

// Laço de repetição com a condição e incremento
for (i = 0; i <= 50; i++) {
    console.log(i);
}




// Calculando a média de alunos

// Declarando as notas dos alunos
let n1 = 7.5;
let n2 = 8.0;
let n3 = 6.5;
let n4 = 9.0;
let n5 = 5.5;
let n6 = 7.0;
let n7 = 8.5;

// Calculando a média
let media = (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;
console.log("A média das notas é: " + media);




// Tranformando float em int

// Declarando uma variável float
let f = 3.14;

// Convertendo usando parseInt
console.log(parseInt(f));




// Convertendo string para float

// Declarando uma string com número decimal
let g = "tenho 3.140 reais";

// Convertendo usando parseFloat
console.log(parseFloat(g));