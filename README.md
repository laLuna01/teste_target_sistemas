# Teste target sistemas
para o processo seletivo de estágio

## 1) Observe o trecho de código abaixo:
```
int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça {
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);
```
Ao final do processamento, qual será o valor da variável SOMA? 
### Resposta: Ao final do processamento o valor da váriavel SOMA é 91

## 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
```
function fibonacci(n) {
    let fib = [0, 1];
    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

function verificaFibonacci(num) {
    let sequencia = fibonacci(num);
    if (sequencia.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

verificaFibonacci(13);
```

## 3) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
### Resposta: É uma sequência de números ímpares (soma o número a 2 para obter o próximo) - O próximo número é 9
b) 2, 4, 8, 16, 32, 64, ____
### Resposta: É uma sequência de potências de 2 (multiplica o número por 2 para obter o próximo) - O próximo número é 128
c) 0, 1, 4, 9, 16, 25, 36, ____
### Resposta: É uma sequência de quadrados de números consecutivos a partir do 0 (eleva o número consecutivo ao quadrado e por aí vai) - O próximo número é 49
d) 4, 16, 36, 64, ____
### Resposta: É uma sequência que a diferença entre dois números seguintes vai sendo acrescida de 8 da razão anterior (a primeira razão é 12) - O próximo número é 100
e) 1, 1, 2, 3, 5, 8, ____
### Resposta: É uma sequência que começa com 1 e 1, e cada número subsequente é a soma dos dois números anteriores, seguindo a sequência de Fibonacci - O próximo número é 13
f) 2,10, 12, 16, 17, 18, 19, ____
### Resposta: É uma sequência em que todos os númros começam com a letra "D" - O próximo número é 200

## 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
### Resposta: 
Vamos chamar as salas de '1' '2' e '3' e os interruptores de 'A' 'B' e 'C'

Eu ligaria o interruptor 'B' e deixaria ligado por um bom tempo, depois desligaria e ligaria rápido o 'A'
- usaria a primeira visita na sala '1':
    * se a lâmpada estiver acessa significa que a sala '1' corresponde ao interruptor 'A' 
    * se a lâmpada estiver apagada e quente significa que a sala '1' corresponde ao interruptor 'B' 
    * se a lâmpada estiver apagada e fria significa que a sala '1' corresponde ao interruptor 'C' 

Ao voltar para os interruptores eu deixaria o interruptor 'A' ligado por um bom tempo e depois desligaria e ligaria rápido o 'B'
- usaria a segunda visita na sala '2':
    * se a lâmpada estiver acessa significa que a sala '2' corresponde ao interruptor 'B' 
    * se a lâmpada estiver apagada e quente significa que a sala '2' corresponde ao interruptor 'A' 
    * se a lâmpada estiver apagada e fria significa que a sala '2' corresponde ao interruptor 'C' 

Com isso já saberia quais são os pares de duas salas só sobrando uma alternativa para a última sala não visitada

## 5) Escreva um programa que inverta os caracteres de um string.
```
function inverteString(inputString) {
    let stringInvertida = "";

    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];
    }

    return stringInvertida;
}

const inputString = "Olá, mundo!";
console.log("String Original:", inputString);
console.log("String Invertida:", inverteString(inputString));
```
