function ehPalindromo(palavra){
    palavra = palavra.toLowerCase();
    palavra = palavra.normalize("NFD");
    palavra = palavra.replace(/[\u0300-\u036f]/g, "");
    let letras = palavra.split('');
    var inverte = [];
    var j = 0;

    for (let i = letras.length-1; i>=0; i--){
        inverte[j] = letras[i]; 
        if (inverte[j] == letras[i]){
            return true;
        }
        j++; 
    }

//    if (JSON.stringify(letras) == JSON.stringify(inverte)){
//        return true;
//    }
    return false;


}

console.log(ehPalindromo("arará"));