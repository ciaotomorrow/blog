<template>
    <div class="dropdown-menu" @click.stop="toggleMenu">
      <button class="dropdown-button">Menu</button>
      <div v-if="isOpen" class="dropdown-content">
        <ul>
          <li v-for="item in items" :key="item.text">
            <a :href="item.href">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        items: [
          { text: 'Item 1', href: '#' },
          { text: 'Item 2', href: '#' },
          // Add more items as needed
        ],
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .dropdown-menu {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  .dropdown-content {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    min-width: 160px;
    max-width: 300px; /* Adjust based on design requirements */
    /* Add backdrop filter for blur effect */
    backdrop-filter: blur(5px);
    /* Make sure it resizes responsively */
    overflow: hidden;
  }
  
  .dropdown-content ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  
  .dropdown-content li {
    padding: 8px 16px;
  }
  
  .dropdown-content li a {
    text-decoration: none;
    color: black;
    display: block;
  }
  
  .dropdown-content li:hover {
    background-color: #f1f1f1;
  }
  
  /* Responsive adjustments */
  @media (max-width: 600px) {
    .dropdown-content {
      min-width: 100%; /* Full width on smaller screens */
    }
  }
  </style>
  