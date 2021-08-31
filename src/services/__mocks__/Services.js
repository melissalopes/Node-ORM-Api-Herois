
class Services {

    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async getAllRegisters () {
        return [];
    }

    async getOneRegister (id) {
        const idDoHeroi = id;
        return {
            id: idDoHeroi,
            nome: 'Peter Parker',
            poder: 'Habilidades e força de uma aranha' ,
            fraqueza: 'Compostos Químicos' ,
            identidadeSecreta: 'Homem-Aranha' ,
            grupo_id: 1,
            createdAt: '10/12/2021',
            updatedAt: '10/12/2021'
        };
    }

    async createNewRegister (dados) {
        const novoRegistro = dados;
        return novoRegistro;
    }

    async updateRegister (dadosAtualizados, id) {
        return {
            id: id,
            nome: dadosAtualizados.nome,
            poder: dadosAtualizados.poder,
            fraqueza: dadosAtualizados.fraqueza,
            identidadeSecreta: dadosAtualizados.identidadeSecreta,
            grupo_id: 1,
            createdAt: '10/12/2021',
            updatedAt: '10/12/2021'
        }
    }

    /* async deleteRegister () {
        
    } */

}

module.exports = Services