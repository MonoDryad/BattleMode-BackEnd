const db = require('../models')
const Jogo = db.jogo

exports.findAll = async () => {
    try {
        const jogo = await Jogo.findAll({
            attributes: ['id', 'titulo']
        })
        return jogo
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os jogo. ERROR: ' + e.message)
    }
}

exports.findById = async (id) => {
    try {
        const jogo = await Jogo.findById(id, {
            attributes: ['id', 'titulo']
        })
        return jogo
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os jogo. ERROR: ' + e.message)
    }
}

exports.create = async (titulo, descricao, imgHover, img) => {
    try {
        const jogo = await Jogo.create({ titulo: titulo, descricao: descricao, imgHover: imgHover, img: img })
        return jogo
    } catch (e) {
        throw Error('Erro ao inserir o usuário: ' + titulo + ' ERROR: ' + e.message)
    }
}

exports.update = async (id, titulo, descricao, imgHover, img) => {
    try {
        await Jogo.update({
            titulo: titulo, descricao: descricao, imgHover: imgHover, img: img
        }, { where: { id: id } })

    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + titulo + ' ERROR: ' + e.message)
    }
}