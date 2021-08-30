jest.mock('../../services/Services')

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
    updatedAt: '10/12/2021'}

describe('Heróis Service', () => {

    test('O método getOneRegister() retorna um herói existente no banco', async () => {     
        const register = await heroisServices.getOneRegister(heroi.id);
        expect(register).toStrictEqual(heroi);
    })
    

    test('O método createNewRegister() cria um novo herói', async () => {
        const register = await heroisServices.createNewRegister(heroi)
        expect(register).toStrictEqual(heroi);
    }) 

})