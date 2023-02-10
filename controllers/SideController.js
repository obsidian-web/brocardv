const {Side} = require('../models/models')

class SideController {
    async create(req,res){
        try {
            const {name} = req.body
            await Side.create({name})
            return res.json({message: "Успешно !"});
        } catch (e) {
            return res.json(e)
        }
    }
    async getAll(req,res){
        try{
            const manufacturers = await Side.findAll()
            return res.json(manufacturers)
        } catch (e) {
            return res.json(e)
        }
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Side.destroy({where: {id}})
            return res.json({message: "Успешно !"});
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new SideController()