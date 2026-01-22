<template>
  <div class="product-card" @click="handleClick">
    <div class="product-image">
     <img 
        :src="product.image" 
        :alt="product.name"
        class="product-img"
      >
    </div>
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="product-category">{{ categoryName }}</p>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-footer">
        <span class="product-price">{{ formatPrice(product.price) }} </span>
        <button 
          class="btn-add-cart" 
          @click.stop="handleAddToCart"
        >
          Pridať do košíka
        </button>
      </div>
    </div>
  </div>
</template>

<script>
 import { useCartStore } from '@/stores/cartStore'
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    categoryName() {
      const categories = {
        'semena': 'Semená a sadboviny',
        'naradie': 'Záhradné náradie',
        'hnojiva': 'Hnojivá a substráty',
        'ochrana': 'Ochrana rastlín'
      }
      return categories[this.product.category] || this.product.category
    }
  },
  methods: {
    handleClick() {
      this.$emit('select-product', this.product.slug)
    },
  handleAddToCart() {
    const cartStore = useCartStore()
    cartStore.addItem(this.product)
    // voliteľné: alert alebo toast
    alert(`Pridané: ${this.product.name}`)
  },
  formatPrice(price) {
    return price.toFixed(2) + ' €'
  }
  }
}
</script>