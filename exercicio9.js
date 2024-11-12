function frequenciaPalavras(texto){
    var lista = texto.split(" ");
    console.log(lista);
    var contagem = [];
    var freq = 0;
    for (let i=0 ; i<5 ; i++){
        for (let j=i+1 ; j<lista.length ; j++){
            if (lista[i] == lista[j]){
                contagem[i]++;
            }
        }
        lista.push([{palavra: lista[i], freq: contagem[i]}]);
    }
    return lista;

}

console.log(frequenciaPalavras("tres pratos de trigo para tres tigres tristes"));