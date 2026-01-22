<template>
  <div class="filter-group">
    <label>{{ label }}</label>
    <input 
      :value="modelValue" 
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
    >
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>