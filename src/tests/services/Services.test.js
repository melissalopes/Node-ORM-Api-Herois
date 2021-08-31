jest.mock('../../services/Services');

const { HeroisService } = require('../../services');
const heroisServices = new HeroisService();

const heroi = {
    id: 1,
    nome: 'Peter Parker',
    poder: 'Habilidades e força de uma aranha' ,
    fraqueza: 'Compostos Químicos' ,
    identidadeSecreta: 'Homem-Aranha' ,
    grupo_id: 1,
    createdAt: '10/12/2021',
    updatedAt: '10/12/2021'
};

const heroiAtualizado = {
    id: 1,
    nome: 'Ben Parker',
    poder: 'Habilidades e força de um porco' ,
    fraqueza: 'Não se sabe' ,
    identidadeSecreta: 'Porco-Aranha' ,
    grupo_id: 1,
    createdAt: '10/12/2021',
    updatedAt: '10/12/2021'
};    

describe('Service', () => {

    test('O método getAllRegisters() retorna uma lista vazia', async () => {     
        const registers = await heroisServices.getAllRegisters();
        expect(registers).toEqual([]);
    });

    test('O método getOneRegister() busca e retorna um herói através do seu id', async () => {     
        const register = await heroisServices.getOneRegister(heroi.id);
        expect(register).toStrictEqual(heroi);
    });
    

    test('O método createNewRegister() cria um novo herói', async () => {
        const register = await heroisServices.createNewRegister(heroi);
        expect(register).toStrictEqual(heroi);
    }); 

    test('O método updateRegister() retorna um herói com seus dados atualizados', async () => {
        const novosDados = {
            nome: 'Ben Parker',
            poder: 'Habilidades e força de um porco' ,
            fraqueza: 'Não se sabe' ,
            identidadeSecreta: 'Porco-Aranha'
        };

        const register = await heroisServices.updateRegister(novosDados, 1);
        expect(register).toStrictEqual(heroiAtualizado);
    });

})