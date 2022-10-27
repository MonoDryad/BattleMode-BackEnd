module.exports = (sequelize, Sequelize) => {
    const Jogo = sequelize.define('jogo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        logo: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        descricaoLonga: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        descricaoBreve: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        imgFundo: {
            type: Sequelize.STRING,
            NotNull: true,
        },


    },

        {
            timestamps: false,
        }
    )
    return Jogo
}