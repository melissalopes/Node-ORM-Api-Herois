'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Herois extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Herois.belongsTo(models.Grupos, {
        foreignKey: 'grupo_id'
      })
    }
  };
  Herois.init({
    nome: DataTypes.STRING,
    poder: DataTypes.STRING,
    fraqueza: DataTypes.STRING,
    identidadeSecreta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Herois',
  });
  return Herois;
};