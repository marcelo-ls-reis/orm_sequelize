const { Model, DataTypes } = require('sequelize');

class Telefones extends Model {
    static init(sequelize) {
        super.init({
            tel_proprietario: DataTypes.STRING,
            tel_ddd: DataTypes.STRING,
            tel_numero: DataTypes.STRING,
            tel_tipo: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Telefones;

