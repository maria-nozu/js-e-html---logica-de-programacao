function criarPessoa(nome,idade){
    objeto = {name: nome, age: idade};
    return objeto;
}

var Pessoa = criarPessoa('Maria',27);
console.log(Pessoa);