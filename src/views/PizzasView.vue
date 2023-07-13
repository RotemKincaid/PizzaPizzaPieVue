<script lang="ts">
import { usePizzaStore  } from '../stores/pizza'
import type { Pizza } from '../stores/pizza'
import { useToppingsStore } from '../stores/toppings'
import PizzaComponent from '../components/Pizza.vue'
import PizzaModal from '../components/PizzaModal.vue'

export default {
  components: {
    PizzaComponent,
    PizzaModal
  },
  data() {
    return {
      isModalOpen: false,
      nameToEdit: '',
      toppingsToEdit: [],
      isEditing: false
    }
  },
  computed: {
    pizzas () {
      const store = usePizzaStore()
      return store.pizzas
    }, 
    toppings () {
      const store = useToppingsStore()
      return store.toppings
    }
  },
  methods: {
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
    },
    add (newPizza: Pizza) {
      console.log(newPizza)
      const store = usePizzaStore() 
      store.addPizza(newPizza)
      this.isModalOpen = false
    },
    handleUpdatePizzaInfo (pizza: Pizza) {
      this.isEditing = true
      this.toggleModal()
      const { name, toppings } = pizza
      this.nameToEdit = name
      this.toppingsToEdit = toppings
    },
    update (pizza: Pizza) {
      console.log("Name to edit?: ", this.nameToEdit, "new pizza:", pizza)
      this.isEditing = false
      this.toggleModal()
      const store = usePizzaStore() 
      store.updatePizza(this.nameToEdit, pizza)
    }
  }
}

</script>

<template>
  <div class="pizzas">
    <h1 class="title">Pizza List</h1>
    <div v-for="(pizza, index) in pizzas" :key="index">
      <PizzaComponent :name="pizza.name" :toppings="pizza.toppings" @update="handleUpdatePizzaInfo($event)"/>
    </div>
    <div @click="toggleModal" class="add-new">Add New +</div>
    <div v-if="isModalOpen">
     <PizzaModal @close="toggleModal()" @add="add($event)" :editing="isEditing" :existingName="isEditing ? nameToEdit : ''" :existingToppings="isEditing ? toppingsToEdit : []" @update="update($event)"/>
    </div>
  </div>
</template>

<style>
  .pizzas {
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
  }
  .title {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

.add-new {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1.5rem;
  background-color: #3c6302;
  color: #fff;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  cursor: pointer;
}

.close {
  position: absolute;
  left: 20px;
}

.add-pizza {
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 13px;
  background-color: rgb(91, 18, 3);
  color: #fff;
  margin: 30px 0;
  text-align: center;
}

  @media (min-width: 1024px) {
    .pizza {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

</style>
