const db = require('../models')
const Jogo = db.jogo

exports.findAll = async () => {
    try {
        const jogo = await Jogo.findAll({
            attributes: ['id', 'nome', 'logo', 'descricaoLonga', 'descricaoBreve', 'imgFundo' ]
        })
        return jogo
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os jogo. ERROR: ' + e.message)
    }
}

exports.findByPk = async (id) => {
    try {
        const jogo = await Jogo.findByPk(id, {
            attributes: ['id', 'nome']
        })
        return jogo
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os jogo. ERROR: ' + e.message)
    }
}

exports.create = async (nome, logo, descricaoLonga, descricaoBreve, imgFundo) => {
    try {
        const jogo = await Jogo.create({ nome: nome, logo: logo, descricaoLonga: descricaoLonga, descricaoBreve: descricaoBreve, imgFundo: imgFundo })
        return jogo
    } catch (e) {
        return e.message
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