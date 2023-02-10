const router = require('express').Router()

const categoryRouter = require('./ModelRouter')
const vehicleRouter = require('./VehicleRouter')
const userRouter = require('./UserRouter')
const reviewRouter = require('./ReviewRouter')

//connect routes with routers
router.use('/category', categoryRouter)
router.use('/user', userRouter)
router.use('/vehicle', vehicleRouter)
router.use('/review', reviewRouter)

module.exports = router