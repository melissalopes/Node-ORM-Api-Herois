const { Router } = require("express")
const HeroiController = require('../controllers/HeroiController')

const router = Router()

router.get('/herois', HeroiController.getHerois)
router.get('/herois/:id', HeroiController.getHeroiPorId)
router.post('/herois', HeroiController.postHeroi)
router.patch('/herois/:id', HeroiController.patchHeroi)
router.delete('/herois/:id', HeroiController.deleteHeroi)

module.exports = router