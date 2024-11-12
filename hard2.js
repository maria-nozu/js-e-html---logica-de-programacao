// 2.Remoção de Elementos Duplicados em um Array sem Usar Set
function removeDupla(lista = []){
    for (i=0; i<lista.length; i++){
        for(j=i+1; j<lista.length; j++){
            if (lista[i]==lista[j]){
                lista.splice(j,1);
                j--;
            }
        }
    }
    return lista;
}

console.log(removeDupla([2,2,4,5,6,6,7,7,8,8,8,9,0]));