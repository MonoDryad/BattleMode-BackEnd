module.exports = (sequelize, Sequelize) => {
    const Time = sequelize.define('time', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        tag:{
            type: Sequelize.CHAR(4),
            NotNull: true,
        },
        logo:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        imgFundo:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        equipeAtiva:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        reserva:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        comissaoTecnica:{
            type: Sequelize.STRING,
            NotNull: true,
        },
        jogoPrincipal:{
            type: Sequelize.INTEGER,
            NotNull: true,
        },
        conquistas:{
            type: Sequelize.STRING,
            NotNull: true,
        }

    },
    
    {
        timestamps: false,
    }
)
    return Time
}