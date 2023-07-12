import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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
    addPizza (pizza: any) {
      this.pizzas.push(pizza)
    },
    updatePizza(id: string, payload: any) {
      if (!id || !payload) return;

      const index = this.findIndexByName(id);

      // if (index !== -1) {
      //   this.pizzas[index] = Math.random() * 10;
      // }
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
