<script lang="ts">
import { useToppingsStore } from '../stores/toppings'
import Topping from '../components/Topping.vue'

  export default {
    components: {
      Topping
    },
    data() {
      return {
        isModalOpen: false,
        isEditing: false,
        existing: '',
        toppingToEdit: '',
        errMessage: ''
      }
    },
    computed: {
      toppings() {
        const toppingStore = useToppingsStore()
        return toppingStore.toppings
      },
      displayedText () {
        return this.isEditing ? 'Edit Topping:' : 'Add Topping'
      },
    }, 
    methods: {
      addTopping () {
        const toppingStore = useToppingsStore()
        if (this.toppings.includes(this.toppingToEdit)) {
          this.errMessage = "This topping already exists! Try a different one"
        } else {
          toppingStore.addTopping(this.toppingToEdit)
          this.toggleToppingModal()
        }
        this.toppingToEdit = ''
      },
      toggleToppingModal() {
        this.isModalOpen = !this.isModalOpen
        if (this.isModalOpen) {
          this.errMessage = ""
        } 
      },
      deleteTopping (topping: string) {
        const toppingStore = useToppingsStore()
        toppingStore.deleteTopping(topping)
      },
      setToppingToEdit (ev: string) {
        if (this.toppingToEdit !== ev) {
          this.toppingToEdit = ev
        }
      },
      updateToppingInfo (event: string, existing: string) {
        this.isEditing = true
        this.toggleToppingModal()
        this.toppingToEdit = event
        this.existing = existing
      },
      updateTopping () {
        this.isEditing = false
        this.toggleToppingModal()
        const toppingStore = useToppingsStore()

        toppingStore.updateTopping(this.existing, this.toppingToEdit)
        this.toppingToEdit = ""
      }
    }
  }
</script>

<template>
   <div class="container">
     <h1>Available Toppings</h1>
     <div class='toppings-container'>
        <div v-for="topping in toppings" :key="topping">
            <Topping :topping="topping" @remove="deleteTopping($event)" @update="updateToppingInfo($event, topping)"/>
        </div>   
    </div>

    <div class="add-topping" @click="toggleToppingModal()">
      Add New +
    </div>

    <div v-if="isModalOpen">
      <div className='modal'>
        <div className='overlay'>
            <div className="modal-content">
              <div class="close" @click="toggleToppingModal()">x</div>
              <div class="add-container">
                <label for="new">{{ displayedText }}</label>
                <input type="text" placeholder="new topping" :value="toppingToEdit" @change="setToppingToEdit($event.target.value)">
                <div v-if="!isEditing" class="add-btn" @click="addTopping()">+</div>
                <div v-else class="add-btn" @click="updateTopping()">+</div>
                <div class="error" v-if="errMessage.length">{{ errMessage }}</div>
              </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
    margin: 40px 0;
  }
  .error {
    color: red;
  }
  .close {
    position: absolute;
    top: 5px;
    left: 15px;
    cursor: pointer;
  }
  .toppings-container {
    width: 60%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(20px, auto); 
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

  .add-container {
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
  }
  .add-topping {
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    margin: 1.5rem;
    background-color: #fff;
    color: #3c6302;
    cursor: pointer;
    text-align: center;
    margin: 40px 0;
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
    z-index: 2;
  }

  .add-btn {
    background-color: #97f50a;
    border: 1px solid #ccc;
    color: #4f4e4e;
    padding: 0 8px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 22px;
      margin-top: 30px;
    }
    .toppings-container {
      grid-template-columns: repeat(1, 1fr);
    }

    .add-topping {
      width: 80px;
      font-size: 14px;
      margin-bottom: 40px;
    }
  }

  @media only screen and (max-width: 280px) {
    .add-topping {
      width: 60px;
      font-size: 11px;
    }
  }
</style>