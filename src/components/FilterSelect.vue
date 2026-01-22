<template>
  <div class="filter-group">
    <label>{{ label }}</label>
    <select :value="modelValue" @change="handleChange">
      <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterSelect',
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>