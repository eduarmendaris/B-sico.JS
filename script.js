
// A instrução (var) declara uma ou mais variável

/* 
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;
*/

// Por segurança o melhor a ser usado (let)
// O valor area dentro do bloco recebe o valor que esta fora do bloco,sendo assim (let = area)

/*
let forma = 'retangulo'
let altura = 5;
let comprimento = 7;

let area;

if(forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)
*/


// constante não podendo ser alterada dentro do programa (const) protegendo assim o fluxo de trabalho da aplicação
const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;



if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);


