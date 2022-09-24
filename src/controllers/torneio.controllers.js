const torneioService = require('../services/time.service')

exports.findAll = async (request, response) => {
    try {
        const torneio = await torneioService.findAll()
        return response.status(200).json({
            status: 200,
            data: torneio,
            message: 'Torneios listados com sucesso'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findById = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const torneio = await torneioService.findById(id)
        return response.status(200).json({
            status: 200,
            data: torneio,
            message: 'Torneios  listados com sucesso'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try {
        const { nome, logo, descricaoLonga, descricaoBreve, imgFundo } = request.body
        const torneio = await TimeService.create(nome, logo, descricaoLonga, descricaoBreve, imgFundo)
        return response.status(201).json({
            message: 'Torneio cadastrado com sucesso',
            body: {
                data: torneio
            }
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { nome, logo, descricaoLonga, descricaoBreve, imgFundo } = request.body

        await torneioService.update(nome, logo, descricaoLonga, descricaoBreve, imgFundo)
        return response.status(201).json({
            message: 'torneio alterado com sucesso',
            body: {
                nome: nome, 
                logo: logo,
                imgFundo: imgFundo,
                descricaoLonga: descricaoLonga,
                descricaoBreve: descricaoBreve 
            }
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.delete = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        await torneioService.delete(id)
        return response.status(200).json({
            message: 'torneio deletado'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

