'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grupos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Grupos.hasMany(models.Herois, {
        foreignKey: 'grupo_id'
      })
    }
  };
  Grupos.init({
    nome: DataTypes.STRING,
    base: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grupos',
  });
  return Grupos;
};