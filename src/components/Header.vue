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
    </div>
</template>

<style scoped>
.header {
  /* position: fixed; */
  width: 100vw;
  height: 100px;
  /* width: 700px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  /* margin-bottom: 10px; */

  border-bottom: 5px solid #ffffff;
}

.logo {
  width: 150px;
  /* margin-right: 15px; */
  /* text-align: center;
  margin-bottom: 0.5rem; */
}

a,
.green {
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
  /* display: inline-block; */
  padding: 0 1rem;
  text-decoration: none;
  /* border-left: 1px solid var(--color-border); */
}

.nav-links a:first-of-type {
  border: 0;
} 

@media (min-width: 1024px) {
  .header {
    /* height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 5px solid #ffffff; */

    /* padding-right: calc(var(--section-gap) / 2); */
  }

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  .header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .nav-links {
    text-align: left;
    /* margin-left: -1rem; */
    /* font-size: 1rem; */

    /* padding: 1rem 0; */
    /* margin-top: 1rem; */
  }
}
</style>