<template>
    <div>
      <div  v-if="display"> {{ counterString }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counterString: "0",
        display: false,
      };
    },
    mounted() {
      const existingCounter = this.$parent.counterValue || 0;
      this.counter = existingCounter + 1;
      this.$parent.counterValue = this.counter;
      this.$emit('updateCounter', this.counter); // Emit the updated counter value
      this.counterString = String(this.counter);
      this.display = true;
    },
  }
  </script>
  
  <style scoped>
  p {
    font-size: 18px;
  }
  </style>
  