carro = { marca: "Fiat", modelo: "Palio", ano: 2001, 
    exibirInfo: function(){
        return `Este carro é um modelo ${this.modelo} da marca ${this.marca} fabricada no ano ${this.ano}.`;
}
}

console.log(carro.exibirInfo());