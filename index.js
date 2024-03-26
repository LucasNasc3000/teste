function CalcularIndice() {
let indice = 13;
let k = 0;
let soma = 0;

while ( k < indice) {
  k++;
  soma += k;
}

console.log(soma);
}

// CalcularIndice();

function Binet(valor) {
  return (5*Math.pow(valor, 2) + 4);
}

function Fibonacci(valor) {
   const resultado = Binet(valor);
   if(Math.sqrt(resultado)) {
    console.log("Pertence à sequência de Fibonacci");
   } else {
    console.log("Não pertence à sequência de Fibonacci");
   }
}

// Fibonacci(101);


function inverter(valor) {
    let receberContador = [];
    let inverso = [];
   for(let i = valor.length-1; i > -1; i--) {
      receberContador.push(i);
   }
   for(let i = 0; i < valor.length; i++) {
      console.log(i);
      inverso.push(valor[receberContador[i]]);
   }
   console.log(inverso);
   console.log(receberContador);
}

inverter("teste");
