<script lang="ts">
import { usePizzaStore } from '../stores/pizza'
import { useToppingsStore } from '../stores/toppings'
import Pizza from '../components/Pizza.vue'

export default {
  components: {
    Pizza
  },
  data() {
    return {
      isModalOpen: false,
      selectedPizza: {
        name: "",
        toppings: []
      },
      tempName: "",
      tempToppings: [],
      errMessage: ""
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
    },
    selected () {
      return this.selectedPizza
    }
  },
  methods: {
    selectPizza (name: string) {
      const store = usePizzaStore()
      const pizza = store.findIndexByName(name)
      console.log(pizza)
      this.selectedPizza = pizza
    },
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
    },
    addTempTopping (topping: string) {
      if (this.tempToppings.includes(topping)){
        return
      }
      this.tempToppings.push(topping)
    },
    add () {
      console.log(this.tempName)
      const store = usePizzaStore() 
      if (this.tempName) {
        store.addPizza({ name: this.tempName, toppings: this.tempToppings })
      } else {
        this.errMessage = "please add a name to this pizza"
      }
      this.isModalOpen = false
      this.tempName = ""
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
    <div @click="toggleModal" class="add-new">Add New +</div>
    <div v-if="isModalOpen">
      <div className='modal'>
        <div className='overlay'>
            <div className="modal-content">
              <div class="close" @click="toggleModal()">X</div>

              <label for="name"></label>
              <h3>Name:</h3>
              <input type="text" v-model="tempName">
              <div class="temp-topping-container"> 
                <h3 v-if="tempToppings.length">Selected:</h3> 
                <span v-for="topping in tempToppings" :key="topping">{{ topping }}, </span>

              </div>

              <label for="toppings"></label>
              <h3>Available Toppings:</h3>
              <div v-for="topping in toppings" :key="topping" class="single-topping">
                <span> {{ topping }} </span> <span @click="addTempTopping(topping)">+</span>
              </div>

             <div class="add-pizza" @click="add()">
              Add Pizza
             </div>

            </div>
          </div>
        </div>
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

.modal, .overlay {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: hidden;
}
 .modal {
  z-index: 1;
 }
.overlay {
  background: rgba(49, 49, 49, 0.767);
  z-index: 0;
}
.modal-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  color: #000;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 700px;
  min-width: 300px;
  max-height: 70%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.single-topping {
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: .5rem;
  background-color: #3c6302;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.temp-topping-container {
  width: 70%;
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
