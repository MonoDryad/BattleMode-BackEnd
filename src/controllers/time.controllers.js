const TimeService = require('../services/time.service')

exports.findAll = async (request, response) => {
    try {
        const time = await TimeService.findAll()
        return response.status(200).json({
            status: 200,
            data: time,
            message: 'Times listados com sucesso'
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
        const time = await TimeService.findById(id)
        return response.status(200).json({
            status: 200,
            data: time,
            message: 'Times listados com sucesso'
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
        const { nome, tag ,logo, imgFundo } = request.body
        const time = await TimeService.create(nome, tag ,logo, imgFundo)
        return response.status(201).json({
            message: 'Time cadastrado com sucesso',
            body: {
                data: time
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
        const { nome, tag ,logo, imgFundo } = request.body

        await TimeService.update(nome, tag ,logo, imgFundo)
        return response.status(201).json({
            message: 'time alterado com sucesso',
            body: {
              nome: nome,
              tag: tag,
              logo: logo,
              imgFundo: imgFundo
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
        await TimeService.delete(id)
        return response.status(200).json({
            message: 'time deletado'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}



