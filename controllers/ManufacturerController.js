const {Manufacturer} = require('../models/models')

class ManufacturerController {
    async create(req,res){
        try {
            const {name} = req.body
            await Manufacturer.create({name})
            return res.json({message: "Успешно !"});
        } catch (e) {
            return res.json(e)
        }
    }
    async getAll(req,res){
        try{
            const manufacturers = await Manufacturer.findAll()
            return res.json(manufacturers)
        } catch (e) {
            return res.json(e)
        }
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Manufacturer.destroy({where: {id}})
            return res.json({message: "Успешно !"});
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new ManufacturerController()