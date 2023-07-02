/*
    Escrevendo codigo do meu
    promeiro arquivo JS
*/
// console.log('Meu arquivo importado');
// + - * /

// let nome = 'Celso';
// let sobreNome = 'Bastos';
// const dataNascimento = '10/02/2020';
// let nomeCompleto = `${nome} ${sobreNome} nascido em ${dataNascimento}`;
// let tipo = typeof nomeCompleto;
// console.log(tipo);
// console.log(nomeCompleto);

/*  Conversões */
// let num1 = 140;
// let num2 = '1';
// let soma = String(num1) + Number(num2);
// let convertBool = Boolean(num2);
// console.log(typeof convertBool);
// console.log(convertBool);
// console.log(soma);

/* Estrutura de seleção */

// === , == , !== , != , >, <, >=, <=

let media = 5;
let nome = 'Jonas';
let trabalhos = 3;

// console.log(media !== '5');

// if (media === 5 && trabalhos > 2) {
//     console.log('Aprovado');
// } else {
//     console.log('Reprovado');
// }

// if (media >= 5 || trabalhos > 3) {
//     console.log('Aprovado');
// } else {
//     console.log('Reprovado');
// }

// if (media >= 5 && trabalhos > 3) {
//     console.log('Aprovado');
// }
// else if (media >= 5 && trabalhos < 3) {
//     console.log('Recuperação');
// }
// else if (media >= 5 && trabalhos < 3) {
//     console.log('Recuperação');
// }
// else {
//     console.log('Reprovado');
// }

/*
    v e  v   = v
    f e  v   = f
    v e  f   = f
    v ou v  = v
    v ou f  = v
    v ou f  = f
*/

let test;
let contrato = test ?? 'test123';
// console.log(contrato);

// debugger;
let compras = ['oleo', 'batata','arroz'];
let lista = [compras, 'Jonas', 'Paulo', 14, 400, true];

compras.forEach((element, index, array) => {
    // console.log(element);
});

// lista.push('eduardo');
// console.log(lista[0][1]);

// let x = 0;
// x = x + 1; // x++

// console.log(compras[2])

// for (let i=0; i < 3; i++) {
//     console.log(compras[i]);
// }

/* Funções */
function somaCompra(num1, num2) {
    let numero1 = num1;
    let numero2 = num2;
    let soma = numero1 + numero2;

    return soma;
}
let resultado = somaCompra(50, 30);
console.log(resultado);

/* Function  expressions */
let digaOlar2 = function (mensagem) {
    return mensagem;
}

let digaOlar = mensagem => mensagem;
let mensagem = digaOlar('Olarrrrrr');
console.log(mensagem);


let olaMundo = function() {
    return 'Boas Compras';
}

let calculoCompra = function (compra, callback) {

    let total = 0;
    compra.forEach((item) => {
        total = total + item;
    });

    return callback(total);
}


let result = calculoCompra([5,8,9,50], function(total) {
    return 'Boas Compras' + total;
});
console.log(result);


