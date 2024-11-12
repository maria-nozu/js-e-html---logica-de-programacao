produto = {
    nome: "leite",
    preco: "R$5,95",
    quantidade: 3
}

novoProduto = JSON.parse(JSON.stringify(produto));

novoProduto.preco = "R$5.45";
novoProduto.quantidade = 2;

console.log(produto);
console.log(novoProduto);