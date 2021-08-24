'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Grupos', [
      {
				nome: 'Vingadores',
				base: 'Torre dos Vingadores',
				website: 'www.vingadores.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Inumanos',
				base: 'Atilan',
				website: 'www.atilan.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Liga da Justiça',
				base: 'Estação Espacial',
				website: 'www.ligadajustica.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'My Hero Academia',
				base: 'UA',
				website: 'www.ua.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'X-Men',
				base: 'Mansão do Professor X',
				website: 'www.mutantes.com',
				createdAt: new Date(),
				updatedAt: new Date()
			}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Grupos', null, {});
  }

};
