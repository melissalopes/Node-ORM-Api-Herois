'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Herois', [
      {
        nome: "Tony Stark" ,
        poder: "Força" ,
        fraqueza: "Magnetismo",
        identidadeSecreta: "Homem de Ferro",
        grupo_id: 1 ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Steve Rogers",
        poder: "Força" ,
        fraqueza: "Magia" ,
        identidadeSecreta: "Capitão América" ,
        grupo_id: 1 ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Thor",
        poder: "Magia",
        fraqueza: "Magia",
        identidadeSecreta: "Thor Odinson",
        grupo_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Backagar",
        poder: "Rajadas Sonicas" ,
        fraqueza: "Magia" ,
        identidadeSecreta: "Raio Negro" ,
        grupo_id: 2 ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Logan" ,
        poder: "Regeneração" ,
        fraqueza: "Magnetismo",
        identidadeSecreta: "Wolverine" ,
        grupo_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Barry Allen",
        poder: "Super velocidade",
        fraqueza: "Moralismo" ,
        identidadeSecreta: "Flash" ,
        grupo_id: 3 ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Katsuki Bakugou" ,
        poder: "Explosão" ,
        fraqueza: "Lama",
        identidadeSecreta: "Great Explosion Murder God Dynamight",
        grupo_id: 4 ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:"Izuku Midoriya" ,
        poder: "All For One",
        fraqueza: "Autocontrole",
        identidadeSecreta: "Deku",
        grupo_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Todoroki Shouto" ,
        poder: "Metade Fogo Metade Gelo",
        fraqueza: "Autocontrole" ,
        identidadeSecreta: "Shoto" ,
        grupo_id: 4 ,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Herois', null, {});
    
  }
};
