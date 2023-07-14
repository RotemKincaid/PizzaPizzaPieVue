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
          <font-awesome-icon :icon="['fasl', 'bars']" class="icon" />
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
  padding: 10px;
  border-bottom: 4px solid #ffffff;
}

.icon {
  /* display: none; */
}

.logo {
  width: 150px;
}

a {
  text-decoration: none;
  color: #fff;
  transition: 0.4s;
}

/* .logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
} */
.nav-links {
  /* width: 200px; */
  font-size: 18px;
  text-align: center;
  /* margin: 2rem; */
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
    /* width: 100vw; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 5px solid #ffffff;

    /* padding-right: calc(var(--section-gap) / 2); */
  }

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* .header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  .logo {
    width: 100px;
  }
  .nav-links a {
    display: none;
  }
  .nav-links .icon {
    float: right;
    display: block;
    width: 80px;
    height: 30px;
  }
  /* { */
    /* text-align: left; */
    /* margin-left: -1rem; */
    /* font-size: 1rem; */

    /* padding: 1rem 0; */
    /* margin-top: 1rem; */
  /* } */
}
</style>