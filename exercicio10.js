//Dada a seguinte expressão:
let x = 5
let y = 10
let z = (x++ * --y) / 2 + (y % 3);
console.log (z)
// Qual será o valor final de `z`? Justifique seu raciocínio.

//Raciocínio:
//(5++ * --10) -> (5 * (10-1))-> (5 * 9) = 45
//(9 % 3) = 0
//45 / 2 = 22.5
//22.5 + 0 = 22.5