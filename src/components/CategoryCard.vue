<template>
  <div class="category-item" @click="handleClick">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    title: {
      type: String,
      required: true
    },
    categoryId: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.categoryId)
    }
  }
}
</script>