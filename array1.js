function somaArray(lista = []){
    var soma = 0;
    for (i = 0 ; i<lista.length ; i++){
        soma = soma + lista[i];
    }
    console.log(soma);
}
somaArray([4,6,8,2]);