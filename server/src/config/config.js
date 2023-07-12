module.exports = {
    port: 8080,
    db: {
        database: process.env.DB_NAME || 'pizzaPizzaPie',
        pizza: process.env.DB_PIZZA || 'pizzaPizzaPie',
        toppings: process.env.DB_TOPPING || 'pizzaPizzaPie',
        options: {
            host: process.env.HOST || 'localhost',
            dialect: process.env.DIALECT || 'sqlite',
            storage: './pizzapizzapie.sqlite'
        }
    }
}