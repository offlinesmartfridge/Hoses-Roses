<template>
  <div class="products-page">
    <h1>Naše produkty</h1>
    
    <div class="filters">
      <FilterSelect
        label="Kategória:"
        v-model="selectedCategory"
        :options="categoryOptions"
        @update:modelValue="handleCategoryChange"
      />
      
      <FilterSelect
        label="Zoradiť podľa:"
        v-model="sortBy"
        :options="sortOptions"
      />
      
      <SearchInput
        label="Hľadať:"
        v-model="searchQuery"
        placeholder="Zadajte názov produktu..."
      />
    </div>

    <div class="products-grid">
      <ProductCard
        v-for="product in displayedProducts"
        :key="product.id"
        :product="product"
        @select-product="goToProduct"
        @add-to-cart="addToCart"
      />
    </div>

    <div v-if="displayedProducts.length === 0" class="no-products">
      <p>Nenašli sa žiadne produkty podľa vašich kritérií.</p>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore'
import { useCartStore } from '@/stores/cartStore'
import ProductCard from '../components/ProductCard.vue'
import FilterSelect from '../components/FilterSelect.vue'
import SearchInput from '../components/SearchInput.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductCard,
    FilterSelect,
    SearchInput
  },
  data() {
    return {
      sortBy: 'name',
      searchQuery: '',
      categoryOptions: [
        { value: '', label: 'Všetky kategórie' },
        { value: 'semena', label: 'Semená a sadboviny' },
        { value: 'naradie', label: 'Záhradné náradie' },
        { value: 'hnojiva', label: 'Hnojivá a substráty' },
        { value: 'ochrana', label: 'Ochrana rastlín' }
      ],
      sortOptions: [
        { value: 'name', label: 'Názov' },
        { value: 'price-asc', label: 'Cena (od najlacnejšej)' },
        { value: 'price-desc', label: 'Cena (od najdrahšej)' }
      ]
    }
  },
  computed: {
    selectedCategory() {
      const productStore = useProductStore()
      return productStore.selectedCategory
    },
    filteredProducts() {
      const productStore = useProductStore()
      return productStore.filteredProducts
    },
    displayedProducts() {
      let products = this.filteredProducts
      
      // Vyhľadávanie
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        products = products.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        )
      }
      
      // Zoradenie
      const sorted = [...products]
      if (this.sortBy === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name, 'sk'))
      } else if (this.sortBy === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price)
      } else if (this.sortBy === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price)
      }
      
      return sorted
    }
  },
  mounted() {
    this.checkUrlCategory()
  },
  methods: {
    checkUrlCategory() {
      const category = this.$route.query.category
      if (category) {
        const productStore = useProductStore()
        productStore.setCategory(category)
      }
    },
    handleCategoryChange(category) {
      const productStore = useProductStore()
      productStore.setCategory(category)
    },
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addItem(product)
      alert(`Pridané: ${product.name}`)
    },
    goToProduct(slug) {
      this.$router.push({ name: 'product-detail', params: { slug: slug } })
    }
  }
}
</script>