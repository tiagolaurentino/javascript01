const categoriaLivro = [
    {
        categoria: 'Riqueza',
        livros: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T.Harv Eker',
            },
            {
                title: 'O homem mais ricos da Babilônia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico , pai pobre',
                author: 'Robert T.Kiyosaki e Sharon L. Lechter',
            },
        ], 
    },
    {
        categoria: 'Inteligência Emocional',
        livros: [
            {
                title: 'Você é Insubistituivel',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfretar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R Covey',
            },
        ],
    },
]

const totalcategoria = categoriaLivro.length //contar as categorias

console.log(totalcategoria)
for(let category of categoriaLivro) {
    console.log('Total de livros da categorias:', category.categoria)
    console.log(category.livros.length)
}

