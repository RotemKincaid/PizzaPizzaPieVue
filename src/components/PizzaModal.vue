<script lang="ts">
import { useToppingsStore } from '../stores/toppings'
import { usePizzaStore } from '../stores/pizza'
export default {
 props: {
   editing: {
    type: Boolean,
    default: false
   },
   existingName: {
    type: String,
    required: false
   },
   existingToppings: {
    type: Array,
    required: false
   }
 },
 data () {
    return {
        tempName: this.existingName ? this.existingName : '',
        tempToppings: this.existingToppings? this.existingToppings : [],
        errMessage: ""
    }
 },
 computed: {
    toppings () {
        const store = useToppingsStore()
        return store.toppings
    }
 },
 methods: {
    addTempTopping (topping: string) {
      if (this.tempToppings.includes(topping)){
        return
      }
      this.tempToppings.push(topping)
    },
    removeTempTopping (topping: string) {
        if (this.tempToppings.includes(topping)) {
            this.tempToppings = this.tempToppings.filter(tempTopping => topping !== tempTopping)
        }
    },
    addPizza () {
      if (this.tempName) {
        this.$emit('add', { name: this.tempName, toppings: this.tempToppings})
      } else {
        this.errMessage = "please add a name to this pizza"
      }
    },
    updatePizza () {
        this.$emit('update', {name: this.tempName, toppings: this.tempToppings })
    },
    updateName (name: string) {
        if (this.tempName !== name) {
          this.tempName = name
        }
    }
 }
}
</script>

<template>
     <div className='modal'>
        <div className='overlay' @click="$emit('close')">
            <div className="modal-content">
              <div class="close" @click="$emit('close')">x</div>

              <label for="name"></label>
              <h3>Name:</h3>
              <input type="text" :placeholder="existingName" :value="tempName" @input="updateName($event.target.value)">
              <div class="temp-topping-container"> 
                <h3 v-if="tempToppings.length">Selected:</h3> 
                <div v-for="topping in tempToppings" :key="topping" class="single-topping">
                    <span> {{ topping }} </span> <span @click="removeTempTopping(topping)">X</span>
                </div>

              </div>

              <label for="toppings"></label>
              <h3>Available Toppings:</h3>
              <div v-for="topping in toppings" :key="topping" class="single-topping">
                <span> {{ topping }} </span> <span @click="addTempTopping(topping)">+</span>
              </div>

              <div v-if="editing" class="add-pizza" @click="updatePizza()">
                Update Pizza
              </div>
              <div v-else class="add-pizza" @click="addPizza()">
                Add Pizza
              </div>

             <div class="error">{{ errMessage }}</div>

            </div>
          </div>
        </div>
</template>

<style scoped>
.modal, .overlay {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: hidden;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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

.error {
    color: red;
}
</style>