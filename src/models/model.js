
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("model",{
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        path: {
            type: DataTypes.STRING,
        },
    });
    return model;
}