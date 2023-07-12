const { Pizza } = require('../models')

module.exports = {
    // async getPizzas (req, res) {
    //     try {
    //       const pizza = await Pizza.create(req.body)
    //       res.send(pizza.toJSON())
    //     } catch (err) {
    //         res.status(400).send({
    //             error: 'Could not fetch pizzas'
    //         })
    //     }
    // },
    async addPizza (req, res) {
        try {
          const pizza = await Pizza.create(req.body)
          res.send(pizza.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Could not add pizza'
            })
        }
    },
    deletePizza (req, res) {
        res.send({
            message: `pizza ${req.body.id} will be deleted when you put the missing logic in here`
        })
    }
}