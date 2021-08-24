const Services = require('./Services');
const database = require('../models');
const axios = require('axios');
const url = 'https://sandbox.clicksign.com/api/v1/templates/3c2eaf75-e11a-4e10-a480-9377df332b7e/documents?access_token=4022cf56-74d6-4518-b641-50c1a800ba09';

class heroisServices extends Services {

    constructor(){
        super('Herois')
    }

    async geraBodyProClicksign (heroiId) {
        try{
            const umHeroi = await database.Herois.findOne({
                where: { id: Number(heroiId) }});
    
            const grupoDoHeroi = await database.Grupos.findOne({
                where: { id: Number(umHeroi.grupo_id) }});
    
            const body = {
                document: {
                  path: `/Fichas/Mel/${umHeroi.nome}.docx`,
                  template: {
                    data: {
                        nomeHeroi: umHeroi.nome,
                        identidadeSecretaHeroi: umHeroi.identidadeSecreta,
                        PoderHeroi: umHeroi.poder,
                        fraquezaHeroi: umHeroi.fraqueza,
                        nomeGrupo: grupoDoHeroi.nome,
                        siteGrupo: grupoDoHeroi.website
                    }
                  }
                }
              };
    
            axios.post(url, body);
        }catch(error){
            throw new Error('Não foi possível fazer o upload do documento.');
        };
    }

}

module.exports = heroisServices
