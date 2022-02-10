function calcular(operacao) {
    
        /**  Se o parâmetro "operacao" for igual "soma",
     então executa o código dentro das chaves.

     Senão executa o que está dentro dos parenteses do else
     
        operacao === 'soma' : compara o valor de fato.
        operacao == 'soma' : compara espaço na memória.
        operacao = 'soma' : Atribuição de valor

        'Multiplicação' === 'soma' ?
    */
        
    if (operacao === 'soma') {
        // soma
        return 'Versão soma: ' + somar(1, 2)
    } else {
        // subtrair
        return 'Versão subtraída: ' + subtrair(1, 2)
    }
}

function somar(primeiroValor, segundoValor) {
    return primeiroValor + segundoValor
}

function subtrair(primeiroValor, segundoValor) {
    return primeiroValor - segundoValor
}

console.log(calcular('Multiplicação'));

// function: palavras reservadas
/** Sintaxe
 
function praticarDesconto(preco, desconto) {
    return preco - desconto
}

number = 1, 2, 3.5, 6.0
string = 'A', 'b', 'ç', 'Hello', 'Hello World'
boolean = true, false
  
*/

/**let valorString = 'b';
let valorNumber = 3;
let resultado = true;

"b" + 3
"b" + "3"
"b3"
valorString + valorNumber;*/

