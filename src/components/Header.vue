<script lang="ts">
</script>

<template>
    <div class="header">
        <RouterLink to="/">
            <img class="logo" src="@/assets/images/logo2.png" alt="">
        </RouterLink>

        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/pizzas">Pizzas</RouterLink>
          <RouterLink to="/toppings">Toppings</RouterLink>
       
        </div>
        <div class="icons">
            <RouterLink to="/">
              <font-awesome-icon class="icon" :icon="['fasl', 'house']" />
            </RouterLink>
            <RouterLink to="/pizzas">
              <font-awesome-icon class="icon" :icon="['fasl', 'pizza-slice']" />
            </RouterLink>
            <RouterLink to="/toppings">
              <font-awesome-icon class="icon" :icon="['fasl', 'pepper-hot']" />
            </RouterLink>
          </div>
    </div>
</template>

<style scoped>
.header {
  background-color: rgb(1, 95, 1);
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 4px solid #ffffff;
}

.icons {
  display: none;
}

.logo {
  width: 150px;
}

a {
  text-decoration: none;
  color: #fff;
  transition: 0.4s;
}

.nav-links {
  font-size: 18px;
  text-align: center;
}

.nav-links a.router-link-exact-active {
    color: rgb(248, 74, 11);
}

.nav-links a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav-links a {
  padding: 0 1rem;
  text-decoration: none;
}

.nav-links a:first-of-type {
  border: 0;
} 

@media only screen and (max-width: 600px) {
  .header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 5px solid #ffffff;
  }

  .logo {
    height: 100px;
    width: auto;
    margin-left: 20px;
  }
  .nav-links a {
    display: none;
  }
  .icons {
    float: right;
    display: block;
    width: 160px;
    height: 30px;
    margin-top: 10px;
    margin-right: 30px;
  }

  .icons a.router-link-exact-active {
    color: rgb(248, 74, 11);
  }

  .icon {
    margin-left: 30px;
    height: 20px;
  }
}

@media only screen and (max-width: 280px) {
    .icon {
    margin-left: 27px;
    height: 15px;
  }
}

</style>