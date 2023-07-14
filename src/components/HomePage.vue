<script setup lang="ts">

</script>

<template>
   <div class="home-wrapper">
      <h1>Welcome to Pizza Pizza Pie! </h1>
      <h3>The best pizza management app in the world</h3>
      <img class="pizza-img" src="@/assets/images/pizza.jpg" alt=""/>
      <div class="btns">
         <RouterLink to="/pizzas">
         <button class="btn">Manage Pizzas</button>
         </RouterLink>
         <RouterLink to="/toppings">
         <button class="btn">Manage Toppings</button>
         </RouterLink>
      </div>
    </div>
</template>

<style scoped>
  .home-wrapper {
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   flex-direction: column;
   margin-top: 30px;
   margin-bottom: 50px;
  }

  .btns {
   display: inline;
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
      margin: 20px 40px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none;
      width: 170px;
      height: 50px;

   }
   @media only screen and (max-width: 600px) {
      .home-wrapper {
         padding-left: 15px;
      }
      .pizza-img {
         width: 240px;
      }

      .btns {
         margin: 0 auto;
      }
   }
</style>
