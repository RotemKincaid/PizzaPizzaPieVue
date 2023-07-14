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
        {{ topping }}<span class="delete" @click="$emit('remove', topping)">X</span>
      </div>
</template>

<style>
.single-topping {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin: .5rem;
  background-color: #3c6302;
  color: #fff;
  display: flex;
  justify-content: space-between;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.delete {
    cursor: pointer;
}
</style>