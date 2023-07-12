const PizzaController = require('./controllers/PizzaController')

module.exports = (app) => {
    // app.get('/pizzas', PizzaController.getPizzas)
    app.post('/pizzas', PizzaController.addPizza)
    app.delete('/pizzas/delete', (req, res) => {
        res.send({
            message: `pizza ${req.body.id} will be deleted when you put the missing logic in here`
        })
    })
}