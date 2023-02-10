const {Review} = require('../models/models')

class ReviewController {
    async create(req,res){
        try{
            const {message, mark} = req.body
            const review = await Review.create({message, mark})
            return res.json(review)
        } catch (e) {
            return res.json(e)
        }
    }
    async getAll(req,res){
        try {
            const reviews = await Review.findAndCountAll()
            return res.json(reviews)
        } catch (e) {
            return res.json(e)
        }
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            await Review.destroy({where: {id}})
            return res.json({message: "Успешно"});
        } catch (e) {
            return res.json(e);
        }
    }
    async update(req,res) {
        try{
            const {id} = req.params;
            await Review.findOne({where:{id}}).then(d => Review.update({approved: !d.approved}, {where: {id}}))
            return res.json({message: "Успешно!"})
        } catch (e) {
            return res.json(e);
        }
    }
}

module.exports = new ReviewController()