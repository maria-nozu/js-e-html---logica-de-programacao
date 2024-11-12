function ordenarArray(lista = []){
    for (i = 0; i<lista.length; i++){
        for (j=i+1; j<lista.length; j++){
            if(lista[i]>lista[j]){
                let cofre = lista[i];
                lista[i] = lista[j];
                lista[j] = cofre;
            }
        }
    }
    return lista;

}

console.log(ordenarArray([4,2,9,5,6,8,3]));