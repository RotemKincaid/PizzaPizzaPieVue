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
    ]
  }),
  actions: {
    addTopping (topping: any) {
      this.toppings.push(topping)
    },
    updateTopping(id: string, payload: any) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      // if (index !== -1) {
      //   this.pizzas[index] = Math.random() * 10;
      // }
    },
    deleteTopping(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.toppings.splice(index, 1);
    },
    findIndexById(id: string) {
      return this.toppings.findIndex((item) => item.id === id);
    },
  },
})
