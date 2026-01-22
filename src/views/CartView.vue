<template>
  <div class="cart-page">
    <h1>Nákupný košík</h1>

    <div v-if="cartItems.length === 0" class="cart-empty">
      <div class="empty-icon">🛒</div>
      <h2>Váš košík je prázdny</h2>
      <p>Pridajte si produkty do košíka a pokračujte v nákupe</p>
      <button class="btn-primary" @click="goToProducts">
        Prejsť na produkty
      </button>
    </div>

    <div v-else class="cart-content">
      <div class="cart-items">
        <div 
          v-for="item in cartItems" 
          :key="item.id"
          class="cart-item-row"
        >
          <div class="item-image">
            <img 
              :src="item.image"
              :alt="item.name"
              class="cart-img"
            >
          </div>
          
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="item-category">{{ getCategoryName(item.category) }}</p>
          </div>
          
          <div class="item-price">
            <span class="price-label">Cena:</span>
            <span class="price-value">{{ formatPrice(item.price) }}</span>
          </div>

          <div class="item-quantity">
            <button class="qty-btn" @click="decreaseQuantity(item.id)">−</button>
            <span class="qty-value">{{ item.quantity }}</span>
            <button class="qty-btn" @click="increaseQuantity(item.id)">+</button>
          </div>

          <div class="item-total">
            <span class="total-label">Spolu:</span>
            <span class="total-value">{{ formatPrice(item.price * item.quantity) }}</span>
          </div>

          <button class="btn-remove" @click="removeItem(item.id)">×</button>
        </div>
      </div>

      <div class="cart-summary">
        <h2>Súhrn</h2>
        <div class="summary-row">
          <span class="total-label">Položky:</span>
          <span>{{ totalItems }}</span>
        </div>
        <div class="summary-row summary-total">
          <span>Celkom:</span>
          <span>{{ formatPrice(totalPrice) }}</span>
        </div>
        <button class="btn-primary btn-checkout" @click="checkout">
          Pokračovať k objednávke
        </button>
        <button class="btn-clear" @click="handleClearCart">
          Vyprázdniť košík
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'CartView',
  computed: {
    ...mapState(useCartStore, {
      cartItems: 'items',
      totalItems: 'totalItems',
      totalPrice: 'totalPrice'
    })
  },
  methods: {
    ...mapActions(useCartStore, ['removeItem', 'increaseQuantity', 'decreaseQuantity', 'clearCart']),
    
    getCategoryName(category) {
      const categories = {
        'semena': 'Semená a sadboviny',
        'naradie': 'Záhradné náradie',
        'hnojiva': 'Hnojivá a substráty',
        'ochrana': 'Ochrana rastlín'
      }
      return categories[category] || category
    },
    handleClearCart() {
      if (confirm('Naozaj chcete vyprázdniť košík?')) {
        this.clearCart()
      }
    },
    checkout() {
      alert(`Objednávka na sumu ${this.formatPrice(this.totalPrice)} bola vytvorená!`)
      this.clearCart()
      this.$router.push({ name: 'home' })
    },
    goToProducts() {
      this.$router.push({ name: 'products' })
    },
    formatPrice(price) {
      return price.toFixed(2) + ' €'
    }
  }
}
</script>