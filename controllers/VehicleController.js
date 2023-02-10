const {VehicleImage, Vehicle} = require('../models/models')
const path = require('path')
const uuid = require('uuid')
const fs = require('fs')

class VehicleController {
    async create(req,res){
        try {
            const {name, modelId, manufacturerId, sideId, price, capacity, year, side, drive, description} = req.body
            const {images} = req.files;
            let imgName = uuid.v4() + '.jpg';
            const vehicle = await Vehicle.create({
                image: imgName, name, modelId, manufacturerId,
                sideId, side, price, description, capacity, year, drive
            }).then(images[0].mv(path.resolve(__dirname,'..', 'static', imgName)))

            for (let i = 0; i < images.length; i++) {
                imgName = uuid.v4() + '.jpg'
                await images[i].mv(path.resolve(__dirname,'..', 'static', imgName))
                await VehicleImage.create({img: imgName, vehicleId: vehicle.id})
            }
            return res.json({message: "Успешно !"});
        }
        catch (e) {
            return res.json(e)
        }

    }
    async getAll(req,res) {
        try {
            const {sideId, modelId, manufacturerId, page, limit} = req.query
            let offset = page * limit - limit
            let vehicles
            if (sideId || modelId || manufacturerId) {
                vehicles = await Vehicle.findAndCountAll({where: {modelId, manufacturerId, sideId },limit, offset, order: [['createdAt', 'DESC']]})
                return res.json(vehicles)
            }
            if (!sideId || modelId || manufacturerId) {
                vehicles = await Vehicle.findAndCountAll({where: {modelId, manufacturerId }, limit, offset, order: [['createdAt', 'DESC']]})
                return res.json(vehicles)
            }
            if (sideId || !modelId || manufacturerId) {
                vehicles = await Vehicle.findAndCountAll({where: {manufacturerId, sideId }, limit, offset, order: [['createdAt', 'DESC']]})
                return res.json(vehicles)
            }
            if (sideId || modelId || !manufacturerId) {
                vehicles = await Vehicle.findAndCountAll({where: {modelId, sideId }, limit, offset, order: [['createdAt', 'DESC']]})
                return res.json(vehicles)
            }
            if (!sideId || !modelId || manufacturerId) {
                vehicles = await Vehicle.findAndCountAll({where: {manufacturerId }, limit, offset, order: [['createdAt', 'DESC']]})
                return res.json(vehicles)
            }
            if (!sideId || modelId || !manufacturerId) {
                vehicles = await Vehicle.findAndCountAll({where: {modelId }, limit, offset, order: [['createdAt', 'DESC']]})
                return res.json(vehicles)
            }
            if (sideId || !modelId || !manufacturerId) {
                vehicles = await Vehicle.findAndCountAll({where: { sideId }, limit, offset, order: [['createdAt', 'DESC']]})
                return res.json(vehicles)
            }
            if (!sideId || !modelId || !manufacturerId) {
                vehicles = await Vehicle.findAndCountAll({ limit, offset, order: [['createdAt', 'DESC']]})
                return res.json(vehicles)
            }
        }
        catch (e) {
            return res.json(e)
        }
    }
    async getOne(req,res){
        try{
            const {id} = req.params
            const vehicle = await Vehicle.findOne({where: {id}, include: [{model: VehicleImage, as: 'images'}]})
            return res.json(vehicle)
        } catch (e) {
            return res.json(e)
        }

    }
    async delete(req, res) {
        try {
            const {id} = req.params;
            const vehicle = await Vehicle.findOne({where:{id}})
            //delete main image
            fs.access(path.resolve(__dirname, '..','static', vehicle.dataValues.image), fs.F_OK, () => {
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', vehicle.dataValues.image))
            })
            //delete images
            const images = await VehicleImage.findAll({where: {vehicleId: id}})
            for (let i = 0; i < images.length; i++) {
                fs.access(path.resolve(__dirname, '..','static', images[i].dataValues.img), fs.F_OK, () => {
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', images[i].dataValues.img))
                })
            }
            //delete item
            await VehicleImage.destroy({where: {vehicleId: id}})
            await Vehicle.destroy({where:{id}})
            return res.json({message: "Успешно !"});
        } catch (e) {
            return res.json({e})
        }
    }
}

module.exports = new VehicleController()