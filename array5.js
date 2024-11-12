function removerFalsos(lista = []){
    for(let i = 0; i<lista.length; i++){
        if (!lista[i]){
                lista.splice(i, 1);
                i--;
            }
    }
    return lista;
}

console.log(removerFalsos([1,0,,5,6,9,"",3,4,undefined,0,9,NaN,false,8,null,89]));