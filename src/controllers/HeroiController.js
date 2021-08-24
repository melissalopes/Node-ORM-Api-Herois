const { HeroisService } = require('../services');
const heroisServices = new HeroisService();

class HeroiController {

    static async getHerois (req, res) {
        try{
            const todosOsHerois = await heroisServices.getAllRegisters();
            return res.status(200).json(todosOsHerois);
        }catch(error){
            return res.status(500).json(error.messsage);
        };
    };

    static async getHeroiPorId (req, res) {
        const { id } = req.params;
        try{
            const umHeroi = await heroisServices.getOneRegister(id);
            return res.status(200).json(umHeroi);
        }catch(error){
            return res.status(404).json(error.message);
        };
    };

    static async postHeroi (req, res){
        const novoHeroi = req.body;
        try{
            const novoHeroiCriado = await heroisServices.createNewRegister(novoHeroi);
            return res.status(201).json(novoHeroiCriado);
        }catch(error){     
            return res.status(400).json(error.message);
        };
    };

    static async patchHeroi (req, res){
        const { id } = req.params;
        const novasInfos = req.body;
        try{
            const heroiAtualizado = await heroisServices.updateRegister(novasInfos, id);
            return res.status(200).json(heroiAtualizado);
        }catch(error){     
            return res.status(400).json(error.message);
        };
    };

    static async deleteHeroi (req, res){
        const { id } = req.params;
        try{
            await heroisServices.deleteRegister(id);
            return res.status(200).json({ 
                mensagem: `Herói de id ${id} deletado com sucesso!`
            });
        }catch(error){     
            return res.status(500).json(error.message);
        };
    };

    static async postDocClickSign (req, res) {
        const heroiId = req.body.id;
        try{
            await heroisServices.geraBodyProClicksign(heroiId);
            res.status(200).json({ mensagem : `Upload do arquivo realizado com sucesso!`});
        }catch(error){
            res.status(500).json(error.message);
        };
    };
};

module.exports = HeroiController;