import { defineStore } from 'pinia'

export type Pizza = {
  name: string,
  toppings: string[]
}

export const usePizzaStore = defineStore({
  id: "pizzaStore",
  state: () => ({
    pizzas: [
      { 
        name: 'Splendid Pie',
        toppings: ['pepperoni', 'green peppers', 'mushrooms', 'olives', 'chives']
      },
      { 
        name: 'Veggie Pie',
        toppings: ['sun dried tomatos', 'olives', 'feta', 'spinach']
      },
      { 
        name: 'Meaty Pie',
        toppings: ['BBQ chicken', 'sausage', 'pepperoni', 'garlic']
      },
      { 
        name: 'Girly Pie',
        toppings: ['Feta', 'pineapple', 'sun dried tomatoes', 'jalapeno']
      },
      { 
        name: 'Asian Pie',
        toppings: ['tofu', 'pineapple', 'ginger', 'jalapeno', 'soy']
      },
    ]
  }),
  actions: {
    addPizza (pizza: Pizza) {
      this.pizzas.push(pizza)
    },
    updatePizza(oldName: string, pizza: Pizza) {
      if (!oldName) return;

      const index = this.findIndexByName(oldName);
      this.pizzas[index] = pizza
    },
    deletePizza(name: string) {
      const index = this.findIndexByName(name);

      if (index === -1) return;

      this.pizzas.splice(index, 1);
    },
    findIndexByName(name: string) {
      return this.pizzas.findIndex((item) => item.name === name);
    },
  },
})
