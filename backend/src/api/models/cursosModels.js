const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
    static init(sequelize) {
        super.init({
            cur_descricao: DataTypes.STRING,
            cur_area: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Curso;

