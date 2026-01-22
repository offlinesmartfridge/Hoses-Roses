<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-left">
        <router-link to="/">Domov</router-link>
        <router-link to="/about">O nás</router-link>
        <router-link to="/products">Produkty</router-link>
      </div>
      <div class="nav-right">
        <router-link to="/cart" class="cart-link">
          🛒 Košík
        </router-link>
      </div>
    </nav>
    
    <main class="content">
      <router-view></router-view>
    </main>
    
    <footer class="footer">
      <p>&copy; 2026 Roses&Hoses</p>
    </footer>


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },

  methods: {
    formatPrice(price) {
      return price.toFixed(2) + ' €'
  }

  }
}
</script>

<style>
@import './assets/main.css';
</style>