import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useToppingsStore = defineStore({
  id: "toppingsStore",
  state: () => ({
    toppings: [
        'mushrooms',
        'olives',
        'tomatos',
        'peppers',
        'pepperoni',
        'sausage',
        'basil',
        'feta cheese',
        'onions',
        'pineapple',
        'garlic'
    ]
  }),
  actions: {
    addTopping (topping: string) {
      if (!topping.length) {
        return
      }
      this.toppings.push(topping)
    },
    updateTopping(id: string, payload: any) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);
      // TODO: Finish
    },
    deleteTopping(topping: string) {
      const index = this.toppings.indexOf(topping)
      if (index === -1) return;

      this.toppings.splice(index, 1);
    },
    findIndexById(id: string) {
      return this.toppings.findIndex((item) => item.id === id);
    },
  },
})
