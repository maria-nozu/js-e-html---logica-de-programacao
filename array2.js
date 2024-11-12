function maiorNumero(lista = []){
    var compara = lista[0];
    for (let i = 1; i<lista.length; i++){
        if (compara<lista[i]){
            compara = lista[i];
            console.log(compara);
        }
    }
    return compara;
}

console.log(maiorNumero([2,5,8,3,5,0]));