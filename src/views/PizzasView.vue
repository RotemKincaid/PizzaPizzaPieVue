<script lang="ts">
import Pizza from '../components/Pizza.vue'

export default {
  components: {
    Pizza
  },
  data () {
    return {
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
      ],
    }
  }
}

</script>

<template>
  <div class="pizzas">
    <h1 class="title">Pizza List</h1>
    <div v-for="(pizza, index) in pizzas" :key="index">
      <Pizza :name="pizza.name" :toppings="pizza.toppings" />
    </div>
    <div>Add New</div>

  </div>
</template>

<style>
  h1 {
    text-align: center;
  }
  .title {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    /* letter-spacing: 1px; */
  }
  @media (min-width: 1024px) {
    .pizza {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
