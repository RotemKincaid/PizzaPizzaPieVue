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
    closeModal () {
      document.body.classList.remove("modal-open")
      this.isModalOpen = false
    },
    openModal () {
      document.body.classList.add("modal-open")
      this.isModalOpen = true
    },
    add (newPizza: Pizza) {
      console.log(newPizza)
      const store = usePizzaStore() 
      store.addPizza(newPizza)
      this.isModalOpen = false
    },
    handleUpdatePizzaInfo (pizza: Pizza) {
      this.isEditing = true
      this.openModal()
      const { name, toppings } = pizza
      this.nameToEdit = name
      this.toppingsToEdit = toppings
    },
    update (pizza: Pizza) {
      this.isEditing = false
      this.closeModal()
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
    <div @click="openModal()" class="add-new">Add New +</div>
    <div v-if="isModalOpen">
     <PizzaModal @close="closeModal()" @add="add($event)" :editing="isEditing" :existingName="isEditing ? nameToEdit : ''" :existingToppings="isEditing ? toppingsToEdit : []" @update="update($event)"/>
    </div>
  </div>
</template>

<style scoped>
  .pizzas {
    width: 50%;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
  }

.add-new {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1.5rem;
  background-color: #3c6302;
  color: #fff;
  cursor: pointer;
}

.close {
  position: absolute;
  left: 20px;
}

.modal-open {
  overflow: hidden;
}

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 22px;
      margin-top: 30px;
    }

    
    .pizzas {
      min-height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .add-new {
      font-size: 14px;
      width: 80px;
    }
  }

</style>
