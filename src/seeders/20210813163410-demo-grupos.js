'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Grupos', [
      {
				nome: 'Vingadores',
				base: 'Torre dos Vingadores',
				website: 'vingadores@marvel.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Inumanos',
				base: 'Atilan',
				website: 'atilan@marvel.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Liga da Justiça',
				base: 'Estação Espacial',
				website: 'ligadajustica@dc.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'My Hero Academia',
				base: 'UA',
				website: 'mha@ua.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'X-Men',
				base: 'Mansão do Professor X',
				website: 'mutantes@marvel.com',
				createdAt: new Date(),
				updatedAt: new Date()
			}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Grupos', null, {});
  }

};
