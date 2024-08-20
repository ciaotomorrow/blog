<template>
  <span>
    <button @click="isOpen = !isOpen" class="collapse-button">
      {{ isOpen ? collapseText : expandText }}
    </button>
    <div v-if="isOpen" class="collapse-content">
      <slot></slot>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    expandText: {
      type: String,
      default: 'Expand'
    },
    collapseText: {
      type: String,
      default: 'Collapse'
    }
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style>
.collapse-button {
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #000000; /* Add border */
  border-radius: 4px; /* Rounded corners for the button */
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px; /* Optional: adjust font size */
  text-align: center; /* Center text */
  box-shadow: none; /* Optional: remove any default shadow */
}

.collapse-button:hover {
  background-color: #0056b3; /* Optional: change color on hover */
  border-color: #0056b3; /* Optional: change border color on hover */
}
.collapse-content {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>

