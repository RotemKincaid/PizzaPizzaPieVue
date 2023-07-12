import Api from "./Api"

export default {
    getAllPizzas() {
        Api().get('pizzas/all')
    },
    deletePizza(id) {
        Api().delete('pizzas/delete', id)
    }
}