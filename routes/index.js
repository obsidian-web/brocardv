const router = require('express').Router()

const modelRouter = require('./ModelRouter')
const vehicleRouter = require('./VehicleRouter')
const userRouter = require('./UserRouter')
const reviewRouter = require('./ReviewRouter')
const manufacturerRouter = require('./ManufacturerRouter')
const sideRouter = require('./SideRouter')

//connect routes with routers
router.use('/model', modelRouter)
router.use('/manufacturer', manufacturerRouter)
router.use('/side', sideRouter)
router.use('/vehicle', vehicleRouter)
router.use('/user', userRouter)
router.use('/review', reviewRouter)

module.exports = router