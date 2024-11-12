function Fibonacci(n){
    var first = 0;
    var second = 1;
    var lista = [first,second];
    for (i = 2; i<n; i++){
        var numero = first + second;
        lista.push(numero);
        first = second;
        second = numero;
    }
    return lista;
}

console.log(Fibonacci(10));