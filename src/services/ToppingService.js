import Api from "./Api"

export default {
    delete(id) {
        Api().delete('deleteId', id)
    }
}