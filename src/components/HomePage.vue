<script setup lang="ts">

</script>

<template>
   <div class="home-wrapper">
      <h1>Welcome to Pizza Pizza Pie! </h1>
      <h3>The best pizza management app in the world</h3>
      <img class="pizza-img" src="@/assets/images/pizza.jpg" alt=""/>
      <RouterLink to="/pizzas">
        <button class="btn">Manage Pizzas</button>
      </RouterLink>
    </div>
</template>

<style scoped>
  .home-wrapper {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 30px;
   font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
   .pizza-img {
      width: 600px;
      margin-bottom: 30px;
   }

   h1, h3 {
      text-align: center;
   }

   .btn {
      background-color: var(--primary-color);
      color: #fff;
      padding: 0.5rem 1rem;
      margin-bottom: 30px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none;
      width: 170px;
      height: 50px;

   }
   @media (max-width: 1024px) {
      .pizza-img {
         width: 380px;
      }
   }
</style>
