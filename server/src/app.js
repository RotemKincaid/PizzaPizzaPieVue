const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/pizzas/all', (req, res) => {
    res.send({
        message: "pizzas should be here!!!"
    })
})

app.delete('/pizzas/delete', (req, res) => {
    res.send({
        message: `pizza ${req.body.id} will be deleted when you put the missing logic in here`
    })
})

app.listen(process.env.PORT || 8080)