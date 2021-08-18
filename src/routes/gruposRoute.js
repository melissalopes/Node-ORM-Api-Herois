const { Router } = require("express")
const GrupoController = require('../controllers/GrupoController')

const router = Router()

//pega todos os grupos
router.get('/grupos', GrupoController.getGrupos)
//pega um grupo
router.get('/grupos/:id', GrupoController.getGrupoPorId)
//pega todos os heróis de um grupo
router.get('/grupos/:grupoId/herois', GrupoController.getHeroisDoGrupo)
//pega um herói de um grupo
router.get('/grupos/:grupoId/heroi/:heroiId', GrupoController.getUmHeroiDoGrupo)

router.post('/grupos', GrupoController.postGrupo)
router.patch('/grupos/:id', GrupoController.patchGrupo)
router.delete('/grupos/:id', GrupoController.deleteGrupo)

module.exports = router