// O que será impresso no console para as expressões abaixo?

console.log(0 || "Hello");
//Resultado do console: Hello
//O "||" dá o primeiro valor que não seja vazio

console.log("" && "World");
//Resultado do console: (Não apareceu nada)
//O "&&" dá o primeiro valor que seja vazio

console.log(null ?? "Default Value");
//Resultado do console: Default Value
//já que é null, ele pega o valor do lado direito

console.log(undefined ?? 42);
//Resultado do console: 42
//já que é undefined, ele pega o valor do lado direito
