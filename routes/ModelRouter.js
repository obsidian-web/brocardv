const Router = require('express')
const router = new Router()
const modelController = require('../controllers/ModelController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('Admin'), modelController.create)
router.get('/', modelController.getAll)
router.delete('/:id', checkRole('Admin'), modelController.delete);
module.exports = router