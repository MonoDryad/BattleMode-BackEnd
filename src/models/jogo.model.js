module.exports = (sequelize, Sequelize) => {
    const Jogo = sequelize.define('jogo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        descricao: {
            type: Sequelize.INTEGER,
            NotNull: true,
        },
        imgHover: {
            type: Sequelize.INTEGER,
            NotNull: true,
        },
        img: {
            type: Sequelize.INTEGER,
            NotNull: true,
        },


    },

        {
            timestamps: false,
        }
    )
    return Jogo
}