const db = require('../models')
const Time = db.time

exports.findAll = async () => {
    try{
        const time = await Time.findAll({
            attributes:['id', 'nome', 'tag' ,'logo', 'imgFundo', 'equipeAtiva', 'reserva', 'comissaoTecnica', 'jogoPrincipal', 'conquistas']
        })
        return time
    }catch(e){
        throw Error('Ocorreu um erro ao selecionar os Time. ERROR: ' + e.message)
    }
}

exports.findByPk = async(id) => {
    try{
        const time = await Time.findById(id, {
            attributes:['id', 'nome', 'tag' ,'logo', 'imgFundo', 'equipeAtiva', 'reserva', 'comissaoTecnica', 'jogoPrincipal', 'conquistas']
        })
        return time
    }catch(e){
        throw Error('Ocorreu um erro ao selecionar os time. ERROR: ' + e.message)
    }
}

exports.create = async(nome, tag ,logo, imgFundo, equipeAtiva, reserva, comissaoTecnica, jogoPrincipal, conquistas) => {
    try{
        const time = await Time.create({nome: nome, tag: tag, logo: logo, imgFundo: imgFundo, equipeAtiva: equipeAtiva, reserva: reserva, comissaoTecnica: comissaoTecnica, jogoPrincipal: jogoPrincipal, conquistas: conquistas})
        return time
    }catch(e){
        throw Error('Erro ao inserir o time: ' + nome + ' ERROR: ' + e.message)
    }
}

exports.update = async(nome, tag ,logo, imgFundo, equipeAtiva, reserva, comissaoTecnica, jogoPrincipal, conquistas) => {
    try{
        await Time.update({
            nome: nome, tag: tag, logo: logo, imgFundo: imgFundo, equipeAtiva: equipeAtiva, reserva: reserva, comissaoTecnica: comissaoTecnica, jogoPrincipal: jogoPrincipal, conquistas: conquistas
        }, {where: {id: id}})

    }catch(e){
        throw Error('Erro ao alterar o time: ' + nome + ' ERROR: ' + e.message)
    }
}