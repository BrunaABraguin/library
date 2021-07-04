const livros = require('./database');
const readline = require('readline-sync');

const estradaInicial = readline.question('Deseja buscar livro? S/N ');

if (estradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis: ');
  console.log(
    'Produtividade',
    '/História brasileira',
    '/Américas',
    '/Estilo de vida',
    '/Tecnologia'
  );

  const entradaCategoria = readline.question('Qual categoria você escolhe? ');
  const retorno = livros.filter(
    (livro) => livro.categoria === entradaCategoria
  );

  console.table(retorno);
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
  console.log('Essas são todos os livros disponiveis:');
  console.table(livrosOrdenados);
}
