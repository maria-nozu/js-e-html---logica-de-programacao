function Fatorial(n){
    var soma = 1;
    for (i = n; i>0; i--){
        soma = soma * i;
    }
    return soma;
}

console.log(Fatorial(9));