const db = require('../models')
const Torneio = db.torneio

exports.findAll = async () => {
    try {
        const torneio = await Torneio.findAll({
            attributes: ['id', 'nome']
        })
        return torneio
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os torneios. ERROR: ' + e.message)
    }
}

exports.findById = async (id) => {
    try {
        const torneio = await Torneio.findById(id, {
            attributes: ['id', 'nome']
        })
        return torneio
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os torneio. ERROR: ' + e.message)
    }
}

exports.create = async (nome, logo, descricaoLonga, descricaoBreve, imgFundo) => {
    try {
        const torneio = await Torneio.create({ nome: nome, logo: logo, imgFundo: imgFundo, descricaoLonga: descricaoLonga, descricaoBreve: descricaoBreve })
        return torneio
    } catch (e) {
        throw Error('Erro ao inserir o time: ' + nome + ' ERROR: ' + e.message)
    }
}

exports.update = async (id, nome, logo, descricaoLonga, descricaoBreve, imgFundo) => {
    try {
        await Torneio.update({
            nome: nome, logo: logo, imgFundo: imgFundo, descricaoLonga: descricaoLonga, descricaoBreve: descricaoBreve
        }, { where: { id: id } })

    } catch (e) {
        throw Error('Erro ao alterar o time: ' + nome + ' ERROR: ' + e.message)
    }
}