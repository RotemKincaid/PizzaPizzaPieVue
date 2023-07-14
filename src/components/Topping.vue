<script lang="ts">
export default {
    props: {
        topping: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="single-topping">
        {{ topping }}  
        <div class="icons">
            <span class="edit"><font-awesome-icon :icon="['fasl', 'pen-to-square']" @click="$emit('update',  topping)"/> </span>
            <span class="delete" @click="$emit('remove', topping)">X</span>
       </div>
      </div>
</template>

<style scoped>
.single-topping {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin: .5rem;
  background-color: #3c6302;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.icons {
    display: inline;
}

.delete {
    cursor: pointer;
}

.edit {
    cursor: pointer;
    padding: 10px;
}

@media only screen and (max-width: 280px) {
    .single-topping {
        font-size: 12px;
    }
}
</style>