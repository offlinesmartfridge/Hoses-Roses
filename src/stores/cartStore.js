import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems: (state) => {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    totalPrice: (state) => {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
  },

  actions: {
    addItem(product) {
      const existing = this.items.find(i => i.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },

    removeItem(id) {
      const index = this.items.findIndex(i => i.id === id)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },

    increaseQuantity(id) {
      const item = this.items.find(i => i.id === id)
      if (item) item.quantity++
    },

    decreaseQuantity(id) {
      const item = this.items.find(i => i.id === id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.removeItem(id)
        }
      }
    },

    clearCart() {
      this.items = []
    }
  }
})