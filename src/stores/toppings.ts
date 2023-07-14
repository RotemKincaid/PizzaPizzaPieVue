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
        'garlic',
        'ginger',
        'tofu',
        'soy sauce'
    ]
  }),
  actions: {
    addTopping (topping: string) {
      if (!topping.length) {
        return
      }
      this.toppings.push(topping)
    },
    updateTopping(oldTopping: string, newTopping: string) {
      if (!oldTopping || !newTopping) return;

      const index = this.toppings.indexOf(oldTopping)
      this.toppings[index] = newTopping
    },
    deleteTopping(topping: string) {
      const index = this.toppings.indexOf(topping)
      if (index === -1) return;

      this.toppings.splice(index, 1);
    }
  },
})
