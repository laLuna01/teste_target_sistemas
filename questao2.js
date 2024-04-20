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

