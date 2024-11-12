function contemValor(lista=[], n){
    for (let i = 0; i<lista.length; i++){
        if (lista[i] == n) {
            return true;
        }
    }
    return false;

}
console.log(contemValor([3,5,2,7,5,8,0],4));