<template>
  <div class="product-detail">
    <div v-if="product" class="detail-container">
      <button class="btn-back" @click="goBack">← Späť na produkty</button>
      
      <div class="detail-content">
        <div class="detail-image">
          <img 
            :src="getImagePath(product.image)"
            :alt="product.name"
            class="detail-img"
          >
        </div>
        
        <div class="detail-info">
          <span class="detail-category">{{ getCategoryName(product.category) }}</span>
          <h1>{{ product.name }}</h1>
          <p class="detail-description">{{ product.description }}</p>
          
          <div class="detail-price">
            <span class="price-label">Cena:</span>
            <span class="price-value">{{ formatPrice(product.price) }}</span>
          </div>
          
          <div class="detail-meta">
            <div class="meta-item">
              <strong>ID produktu:</strong> {{ product.id }}
            </div>
            <div class="meta-item">
              <strong>Kategória:</strong> {{ getCategoryName(product.category) }}
            </div>
            <div class="meta-item">
              <strong>Dostupnosť:</strong> <span class="available">Skladom</span>
            </div>
          </div>
          
          <div class="detail-actions">
            <button class="btn-add-cart" @click="addToCart">
              Pridať do košíka
            </button>
            <button class="btn-secondary" @click="goToProducts">
              Pokračovať v nákupe
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="not-found">
      <h2>Produkt nebol nájdený</h2>
      <p>Ľutujeme, ale produkt "{{ $route.params.slug }}" neexistuje.</p>
      <button class="btn-primary" @click="goToProducts">Späť na produkty</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore'
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'ProductDetailView',
  computed: {
    product() {
      const productStore = useProductStore()
      const slug = this.$route.params.slug
      return productStore.getProductBySlug(slug)
    }
  },
  methods: {
    getImagePath(imagePath) {
      const cleanPath = imagePath.replace(/^[./]+/, '')
      return `${import.meta.env.BASE_URL}${cleanPath}`
    },
    getCategoryName(category) {
      const categories = {
        'semena': 'Semená a sadboviny',
        'naradie': 'Záhradné náradie',
        'hnojiva': 'Hnojivá a substráty',
        'ochrana': 'Ochrana rastlín'
      }
      return categories[category] || category
    },
    addToCart() {
      const cartStore = useCartStore()
      cartStore.addItem(this.product)
      alert(`Pridané do košíka: ${this.product.name}`)
    },
    goBack() {
      this.$router.go(-1)
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