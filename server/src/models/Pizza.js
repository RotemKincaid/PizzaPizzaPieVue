
module.exports = (sequelize, DataTypes) => {
    const Pizza = sequelize.define('Pizza', {
        // id: {
        //     type: DataTypes.UUID,
        //     defaultValue: sequelize.UUIDV4,
        //     primaryKey: true,
        // },
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        toppings: {
            type: DataTypes.STRING,
        }
    })
    return Pizza
}