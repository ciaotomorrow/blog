<template>
    <div v-if="visible" class="sidebar-panel" @click.self="closePanel">
      <div class="sidebar-content">
        <button @click="closePanel">Close</button>
        <!-- 这里可以放置你的选项夹内容 -->
        <p>This is the sidebar panel content.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      closePanel() {
        this.$emit('update:visible', false);
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar-panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .sidebar-content {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  </style>
  