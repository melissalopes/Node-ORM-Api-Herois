const database = require('../models');

class HeroiController {

    static async getHerois (req, res) {
        try{
            const todosOsHerois = await database.Herois.findAll();
            return res.status(200).json(todosOsHerois);
        }catch(error){
            return res.status(500).json(error.messsage);
        }
    }

    static async getHeroiPorId (req, res) {
        const { id } = req.params
        try{
            const umHeroi = await database.Herois.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umHeroi)
        }catch(error){
            return res.status(500).json(error.message);
        }
    } 

    static async postHeroi (req, res){
        const novoHeroi = req.body
        try{
            const novoHeroiCriado = await database.Herois.create(novoHeroi)
            return res.status(200).json(novoHeroiCriado)
        }catch(error){     
            return res.status(500).json(error.message);
        }
    }

    static async patchHeroi (req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Herois.update(
                novasInfos, 
                { where: { id : Number(id) }
            })

            const heroiAtualizado = await database.Herois.findOne({
                where: { id: Number(id) } 
            });

            return res.status(200).json(heroiAtualizado)
        }catch(error){     
            return res.status(500).json(error.message);
        }
    }

    static async deleteHeroi (req, res){
        const { id } = req.params
        try{
            await database.Herois.destroy({ where: { id : Number(id) } })
            return res.status(200).end()
        }catch(error){     
            return res.status(500).json(error.message);
        }
    }

}

module.exports = HeroiController;