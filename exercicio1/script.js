//# Exercício 1
//Crie duas funcões que recebem como parâmetro um objeto.

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

function objetomuda (nome){
    for (let i in nome) {
        nome[i] = nome[i].toUpperCase();
    } 
    return nome
}

console.log(objetomuda(objeto))

//2. A segunda deve retornar os valores do objeto como texto corrido.

function showValues(nome){
    let text = '';
    for(let i in nome){
        text += `${nome[i]} `;
    }
    return text.trim();
}
console.log(showValues(objeto))

//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento 
//da funcão de callback, e em seguida imprimir o valor retornado.
//Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.

function objCallBack(objeto, func){
    console.log(func(objeto));
}
// Repita o processo para a função 2

objCallBack(objeto, showValues)