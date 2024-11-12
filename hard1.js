//1.Reversão de palavras em uma frase
function inverterFrase(frase){
    var separado = [];
    separado = frase.split(" ");
    var invertido = [];
    console.log(separado);
    var j = 0;

    for (i=separado.length-1;i>=0; i--) {
        invertido[j] = separado[i];
        j++;
    }

    return invertido;
}

console.log(inverterFrase("Nome palavra isso"));
