function deepClone(objeto){
    var cofre = {};
    cofre = objeto;
    var clone = {};
    clone = cofre;
    return clone;
}

let original = { primeiro: 1,segundo:{terceiro:3}};
let copia = deepClone(original);

console.log(original.segundo.terceiro);
console.log(copia.segundo.terceiro);