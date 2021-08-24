const Services = require('./Services');
const database = require('../models');

class gruposServices extends Services {

    constructor(){
        super('Grupos')
    }

    async getHeroisDoGrupo (grupoId) {
        const heroisDoGrupo = await database.Herois.findAll({
            where: {
                grupo_id: Number(grupoId)
            }
        });
        return heroisDoGrupo;
    }

    async getUmHeroiDoGrupo (grupoId, heroiId) {
        const heroiDoGrupo = await database.Herois.findOne({
            where: {
                id: Number(heroiId),
                grupo_id: Number(grupoId)
            }
        });
        return heroiDoGrupo;
    }
}

module.exports = gruposServices
