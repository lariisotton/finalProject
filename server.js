const minhaAPI = require('express')
const executarAPI = minhaAPI()
const db = require('./connect')
const exphbs = require("express-handlebars")
const path = require('path') //nativo
const bodyParser = require('body-parser') //para fazer ligação entre o body e o name dos campos html


executarAPI.use(minhaAPI.json())
executarAPI.use(bodyParser.urlencoded({ extended: false }))
executarAPI.engine("hbs", exphbs.engine({ // registrando que vai utilizar o handlebars (.hbs)
    extname: ".hbs", 
    defaultLayout: false  // pra não ter arquivos default
}));
executarAPI.set("view engine", "hbs") //setar automaticamente no render o .hbs
executarAPI.set("views", path.join(__dirname, "frontend")) //caminho para encontrar sempre o html


executarAPI.get("/cadastro", (req, res) => { // carregando a view de cadastro
    res.render('cadastro')
})

executarAPI.get('/listar', async (req, res) => { //carregando a pagina listar
    try {
        const estoque = await db.select('*').from('estoque')
        res.render('listar', { estoque })

    } catch (error) {
        const erro = error
        response.status(500).send({
            message: erro.message
        })
    }

})


executarAPI.post('/salvarFormulario', async (request, response) => { //igual está no action do form
    try {
        const dados = request.body
        console.log(dados)
        await db('estoque').insert({
            nomeProduto: dados.nome, //lembrar que o dados está se utilizando da informação contida no name do input
            generoProduto: dados.genero,
            categoriaProduto: dados.categoria,
            quantidadeProduto: dados.quantidade,
            descricaoProduto: dados.descricao,
            usuarios_idUsuario: 1
        })
        response.redirect('/listar') //para direcionar para a lista de cadastrados logo após salvar
    }
    catch (error) {
        const erro = error
        response.status(500).send({
            message: erro.message
        })
    }
})

executarAPI.listen(8080, () => {
    console.log('subiu o servidor')
})

