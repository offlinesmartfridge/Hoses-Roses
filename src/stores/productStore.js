import { defineStore } from 'pinia'
import productsData from '../data/products.json'

export const useProductStore = defineStore('products', {

  state: () => ({
    allProducts: productsData,
    selectedCategory: ''
  }),


  getters: {
    // vrati products podla filtrov
    filteredProducts(state) {
      if (!state.selectedCategory) {
        return state.allProducts
      }
      return state.allProducts.filter(p => p.category === state.selectedCategory)
    },

    //vrati podla id
    getProductById: (state) => (id) => {
      return state.allProducts.find(p => p.id === parseInt(id))
    },

    // vrati podla nazvu
    getProductBySlug: (state) => (slug) => {
      return state.allProducts.find(p => p.slug === slug)
    }
  },


  actions: {
    setCategory(category) {
      this.selectedCategory = category
    },

    clearCategory() {
      this.selectedCategory = ''
    }
  }
})