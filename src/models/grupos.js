const NaoPodeSerNulo = require('../erros/NaoPodeSerNulo')

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
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if(dado === null || dado < 1) throw new NaoPodeSerNulo('Nome')
        }
      }
    },
    base: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if(dado === null || dado < 1) throw new NaoPodeSerNulo('Base')
        }
      }
    },
    website: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if(dado === null || dado.length < 5) throw new NaoPodeSerNulo('Website')
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Grupos',
  });
  return Grupos;
};