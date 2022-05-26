const { Model, DataTypes } = require('sequelize');

class Produtos extends Model {
    static init(sequelize) {
        super.init({
            pro_descricao: DataTypes.STRING,
            pro_vlrcusto: DataTypes.FLOAT,
            pro_vlrvenda: DataTypes.FLOAT,
            pro_ativoinativo: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Produtos;

