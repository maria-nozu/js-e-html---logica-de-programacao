pessoa = { 
    nome: "maria", 
    idade: 27,
    falar: function(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

pessoa.falar();