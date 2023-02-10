const Router = require('express')
const router = new Router()
const sideController = require('../controllers/SideController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', sideController.create)
router.get('/',sideController.getAll)
router.delete('/:id', checkRole('Admin'), sideController.delete);

module.exports = router