const Router = require('express')
const router = new Router()
const manufacturerController = require('../controllers/ManufacturerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('Admin'), manufacturerController.create)
router.get('/', manufacturerController.getAll)
router.delete('/:id', checkRole('Admin'), manufacturerController.delete);
module.exports = router