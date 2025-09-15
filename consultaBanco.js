const minhaAPI = require('express')
const executarAPI = minhaAPI()
const db = require('./connect')

executarAPI.use(minhaAPI.json())


executarAPI.get('/usuarios', async (request, response) => {
    //lista todos os usuários
    try {
        const usuarios = await db.select('*').from('usuarios')
        console.log(usuarios)
        response.status(200).send({
            success: true,
            response: usuarios
        })
    } catch (error) {
        const erro = error
        response.status(500).send({
            message: erro.message
        })
    }
})

executarAPI.get('/estoque', async (request, response) => {
    //lista todos os produtos
    try {
        const estoque = await db.select('*').from('estoque')
        console.log(estoque)
        response.status(200).send({
            success: true,
            response: estoque
        })
    } catch (error) {
        const erro = error
        response.status(500).send({
            //erro: erro,
            message: erro.message
        })
    }
})

// ___________________________________________________________
// get para passar id na url
executarAPI.get('/estoque/:id', async (request, response) => {
    try {
        const id = request.params.id
        const resultado = await db.select('*').from('estoque').where('idProduto', '=', id)
        response.status(200).send({
            'o get foi': resultado
        })
    } catch (error) {
        const erro = error
        response.status(500).send({
            message: erro.message
        })
    }

})
// ______________________________________
executarAPI.get('/estoque/genero/:genero', async (request, response) => {
    try {
        const genero = request.params.genero
        const resultado = await db.select('*').from('estoque').where('generoProduto', '=', genero)
        response.status(200).send({
            'o get foi': resultado
        })
    } catch (error) {
        const erro = error
        response.status(500).send({
            message: erro.message
        })
    }

})

executarAPI.post('/estoque', async (request, response) => {
    try {
        const dados = request.body
        console.log(dados)
        await db('estoque').insert({
            nomeProduto: dados.nome,
            generoProduto: dados.genero,
            categoriaProduto: dados.categoria,
            quantidadeProduto: dados.quantidade,
            usuarios_idUsuario: dados.idUsuario
        })
        response.status(200).send({
            success: true,
            response: dados
        })
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