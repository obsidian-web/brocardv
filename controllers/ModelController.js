const {Model} = require('../models/models')
class ModelController {
    async create(req,res){
        try {
            const {name, manufacturerId} = req.body
            await Model.create({name, manufacturerId})
            return res.json({message: "Успешно !"});
        } catch (e) {
            return res.json(e)
        }
    }
    async getAll(req,res){
        try{
            const {manufacturerId} = req.body
            if (manufacturerId) {
                const models = await Model.findAll({where: {manufacturerId}})
                return res.json(models)
            } else {
                const models = await Model.findAll()
                return res.json(models)
            }
        } catch (e) {
            return res.json(e)
        }
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Model.destroy({where: {id}})
            return res.json({message: "Успешно !"});
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new ModelController()