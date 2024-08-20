<template>
    <div>
      <div class="tab-titles">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ active: currentTab === tab.name }"
          @click="currentTab = tab.name"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content">
        <slot :name="currentTab"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTab: this.tabs[0]?.name || '',
      };
    },
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .tab-titles {
    display: flex;
    cursor: pointer;
  }
  .tab-titles button {
    flex: 1;
    padding: 10px;
    border: none;
    background: #f0f0f0;
    cursor: pointer;
  }
  .tab-titles button.active {
    background: #ddd;
    font-weight: bold;
  }
  .tab-content {
    padding: 20px;
    border: 1px solid #ddd;
    border-top: none;
  }
  </style>
  