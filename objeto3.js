var livro = {titulo: 'It', autor: 'Stephen King', anoPublicacao: 1998};

if ('anoPublicacao' in livro){
    console.log(livro);
}
else{
    livro.anoPublicacao = 2000;
    console.log(livro);
}
