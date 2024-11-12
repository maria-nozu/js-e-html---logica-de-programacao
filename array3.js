function contaOcorrencias(lista =[],n){
    var contagem = 0;
    for (let i = 0; i<lista.length; i++){
        if (lista[i] == n){
            contagem++;
        }
    }
    return contagem;
}

console.log(contaOcorrencias([2,2,2,3,5,6,1,2,6,3],2));