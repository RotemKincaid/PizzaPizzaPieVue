<script lang="ts">
import { usePizzaStore } from '../stores/pizza'

  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      toppings: {
        type: Array,
        default: []
      }
    },
    methods: {
      deletePizza (name: string) {
        const store = usePizzaStore()
        store.deletePizza(name)
      },
      handleUpdate() {
        this.$emit('update', { name: this.name, toppings: this.toppings})
      }
    }
  }
</script>

<template>
  <div class="card">
    <h2 class="name">{{ name }} <span class="edit"><font-awesome-icon :icon="['fasl', 'pen-to-square']" @click="handleUpdate()"/> </span></h2>
    
    <div class="card inner-card">
        <span class="topping" :key="idx" v-for="(topping, idx) in toppings">
            <span>{{ topping }}</span><span>{{ toppings.indexOf(topping) !== toppings.length - 1 ? ', ' : ''}}</span>
        </span>
    </div>
    <font-awesome-icon :icon="['fasl', 'trash-can']" @click="deletePizza(name)" class="delete" />
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1.5rem;
  background-color: #fff;
  color: #333;
}

.card h2 {
  font-size: 1.5rem;
  text-align: center;
}

.card .card-content {
  margin-top: 1rem;
}

.edit {
  padding-left: 10px;
  cursor: pointer;
}

.delete {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .card {
    width: 300px;
    margin: 0.8rem;
  }

  .inner-card {
    width: 240px;
  }
  .card h2 {
    font-size: 18px;
  }
}

@media only screen and (max-width: 280px) {
  .card {
    width: 200px;
    margin: 0.8rem;
    font-size: 14px;
  }
  .inner-card {
    width: 140px;
  }
}
</style>