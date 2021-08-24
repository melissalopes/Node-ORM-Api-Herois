const { GruposService } = require('../services');
const gruposServices = new GruposService();

class GrupoController {

    static async getGrupos (req, res) {
        try{
            const todosOsGrupos = await gruposServices.getAllRegisters();
            return res.status(200).json(todosOsGrupos);
        }catch(error){
            return res.status(500).json(error.messsage);
        };
    };

    static async getGrupoPorId (req, res) {
        const { id } = req.params;
        try{
            const umGrupo = await gruposServices.getOneRegister(id);
            return res.status(200).json(umGrupo);
        }catch(error){
            return res.status(404).json(error.message);
        };
    };

    static async postGrupo(req, res){
        const novoGrupo = req.body;
        try{
            const novoGrupoCriado = await gruposServices.createNewRegister(novoGrupo);
            return res.status(201).json(novoGrupoCriado);
        }catch(error){     
            return res.status(400).json(error.message);
        };
    };

    static async patchGrupo (req, res){
        const { id } = req.params;
        const novasInfos = req.body;
        try{
            const grupoAtualizado = await gruposServices.updateRegister(novasInfos, id);
            return res.status(200).json(grupoAtualizado);
        }catch(error){     
            return res.status(400).json(error.message);
        };
    };

    static async deleteGrupo (req, res){
        const { id } = req.params;
        try{
            await gruposServices.deleteRegister(id);
            return res.status(200).json({ 
                mensagem: `Grupo de id ${id} deletado com sucesso!`
            });
        }catch(error){     
            return res.status(500).json(error.message);
        };
    };

    static async getHeroisDoGrupo (req, res) {
        const { grupoId } = req.params;
        try{
            const heroisDoGrupo = await gruposServices.getHeroisDoGrupo(grupoId);
            return res.status(200).json(heroisDoGrupo);
        }catch(error){
            return res.status(404).json(error.message);
        };
    };

    static async getUmHeroiDoGrupo (req, res) {
        const { grupoId, heroiId } = req.params;
        try{
            const heroiDoGrupo = await gruposServices.getUmHeroiDoGrupo(grupoId, heroiId);
            return res.status(200).json(heroiDoGrupo);
        }catch(error){
            return res.status(404).json(error.message);
        };
    };

}

module.exports = GrupoController;