function removeDuplicatas(lista = []){
    for (var i = 0; i<lista.length ; i++){
        for (var j = i+1; j<lista.length ; j++){
            if (lista[i] == lista[j]){
                lista.splice(j,1);
                j--;
            }
        }
    }
    console.log(lista);

}

removeDuplicatas([1,1,7,2,2,3,4,5,6,7,7]);