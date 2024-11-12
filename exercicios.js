function Fibonacci(n){
    var primeiro = 0;
    console.log(primeiro);
    var segundo = 1;
    console.log(segundo);
    soma = primeiro + segundo;
    n = n - 1;
    console.log(soma);
    primeiro = segundo;
    for (var i = 2; i<n ; i++){
        var novo = soma;
        soma = primeiro + novo;
        console.log(soma);
        primeiro = novo;
    }
    console.log(soma);
    return soma;
}

 console.log(Fibonacci(8));