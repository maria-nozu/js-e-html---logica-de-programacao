biblioteca = [{titulo: 'Alice no pais das maravilhas', autor: 'lewis carrol', ano: 1702}, {titulo: 'It', autor: 'Stephen King', ano: 2005}, {titulo: 'Clube da luta', autor: 'anonimo', ano:1985}];
console.log(biblioteca[1]);

biblioteca.forEach(function(livro) {
    console.log('Titulo: ', livro.titulo);
    console.log('Autor: ', livro.autor);
    console.log('Ano: ', livro.ano);
    console.log('------------------------');
});