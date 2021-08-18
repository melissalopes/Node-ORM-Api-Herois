const database = require('../models');

class GrupoController {

    static async getGrupos (req, res) {
        try{
            const todosOsGrupos = await database.Grupos.findAll();
            return res.status(200).json(todosOsGrupos);
        }catch(error){
            return res.status(500).json(error.messsage);
        }
    }

    static async getGrupoPorId (req, res) {
        const { id } = req.params
        try{
            const umGrupo = await database.Grupos.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umGrupo)
        }catch(error){
            return res.status(500).json(error.message);
        }
    } 

    static async postGrupo(req, res){
        const novoGrupo = req.body
        try{
            const novoGrupoCriado = await database.Grupos.create(novoGrupo)
            return res.status(200).json(novoGrupoCriado)
        }catch(error){     
            return res.status(500).json(error.message);
        }
    }

    static async patchGrupo (req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Grupos.update(
                novasInfos, 
                { where: { id : Number(id) }
            })

            const grupoAtualizado = await database.Grupos.findOne({
                where: { id: Number(id) } 
            });

            return res.status(200).json(grupoAtualizado)
        }catch(error){     
            return res.status(500).json(error.message);
        }
    }

    static async deleteGrupo (req, res){
        const { id } = req.params
        try{
            await database.Grupos.destroy({ where: { id : Number(id) } })
            return res.status(200).end()
        }catch(error){     
            return res.status(500).json(error.message);
        }
    }

    static async getHeroisDoGrupo (req, res) {
        const { grupoId } = req.params
        try{
            const heroisDoGrupo = await database.Herois.findAll({
                where: {
                    grupo_id: Number(grupoId)
                }
            });
            return res.status(200).json(heroisDoGrupo)
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async getUmHeroiDoGrupo (req, res) {
        const { grupoId, heroiId } = req.params
        try{
            const heroiDoGrupo = await database.Herois.findOne({
                where: {
                    id: Number(heroiId),
                    grupo_id: Number(grupoId)
                }
            });
            return res.status(200).json(heroiDoGrupo)
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

}

module.exports = GrupoController;