// Considere a expressão abaixo:
// let resultado = 10 + 5 * 2 > 20 && !false;
// Qual será o valor da variável `resultado`? Justifique sua resposta.

let resultado = 10 + 5 * 2 > 20 && !false;
console.log(resultado);

//A resposta do resultado no console foi: "false"
//Pois na conta há o "&&" e só dá true se os dois lados forem verdadeiros... 
//E uma das condições não era verdadeira por isso "false".