const NaoPodeSerNulo = require('../erros/NaoPodeSerNulo')

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
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if(dado === null || dado < 1) throw new NaoPodeSerNulo('Nome')
        }
      }
    },
    poder: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if(dado === null || dado.length < 3) throw new NaoPodeSerNulo('Poder')
        }
      }
    },
    fraqueza: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if(dado === null || dado < 1) throw new NaoPodeSerNulo('Fraqueza')
        }
      }
    },
    identidadeSecreta: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if(dado === null || dado < 1) throw new NaoPodeSerNulo('Identidade Secreta')
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Herois',
  });
  return Herois;
};