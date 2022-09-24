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
    },
    
    {
        timestamps: false,
    }
)
    return Time
}