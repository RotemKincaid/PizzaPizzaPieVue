<script lang="ts">
import { usePizzaStore } from '../stores/pizza'
  export default {
    props: {
        name: String,
        toppings: Array
    },
    methods: {
      deletePizza (name: string) {
        const store = usePizzaStore()
        store.deletePizza(name)
      }
    }
  }
</script>

<template>
  <div class="card">
    <div class="delete" @click="deletePizza(name)">X</div>
    <h2 class="name">{{ name }}</h2>
    <div class="card">
        <span class="topping" :key="idx" v-for="(topping, idx) in toppings">
            <span>{{ topping }}</span><span>{{ toppings?.indexOf(topping) !== toppings?.length - 1 ? ', ' : ''}}</span>
        </span>
    </div>
  </div>
</template>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1.5rem;
  background-color: #fff;
  color: #333;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.card h2 {
  font-size: 1.5rem;
  margin-top: 0;
  text-align: center;
}

.card .card-content {
  margin-top: 1rem;
}

.name {
    color: #000;
}

.topping {
    width: 80px;
}

.delete {
  cursor: pointer;
}
</style>