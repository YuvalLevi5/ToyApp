<template>
    <div @click="toggleMenu" class="screen"></div>

  <header class="main-header flex items-center justify-between">
    <div class="logo header-logo">
      <h2>Toy<span class="clr-teal">App</span></h2>
    </div>
    <ul class="main-nav clean-list flex gap-2 fw-bold">
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/toy">Toy</router-link></li>
      <li><router-link class="link" to="/dashboard">Dashboard</router-link></li>
      <li><router-link class="link" to="/about">About</router-link></li>
      <li><router-link class="link" to="/login">Login</router-link></li>
      <li><router-link class="link" to="/user">User</router-link></li>
      <li><router-link class="link" to="/review">Reviews</router-link> </li>
    </ul>
    <button @click="toggleMenu" class="btn menu-toggle-btn">☰</button>
  </header>
</template>
<!-- <template>
  <header class="main-header flex items-center justify-between">
    <div class="logo">
      <h2 class="uppercase">Toy<span class="clr-teal">App</span></h2>
    </div>
    <nav class="flex gap-2 fw-bold">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/toy">Toy</router-link>
      <router-link class="link" to="/dashboard">Dashboard</router-link>
      <router-link class="link" to="/about">About</router-link>
      <router-link class="link" to="/login">Login</router-link>
      <router-link class="link" to="/user">User</router-link>
      <router-link class="link" to="/review">Reviews</router-link>
    </nav>
  </header>
</template> -->

<script>
  export default {
      methods: {
          toggleMenu() {
              document.body.classList.toggle('menu-open')
          },
      }
  }
  </script>
