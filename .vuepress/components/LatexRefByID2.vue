<template>
    <!-- <div v-html="getTagById(id)"></div> -->
    <p>{{ tagValue }}</p>
  </template>
  
  <script>
//   import LatexRenderer from './LatexRenderer.vue'; // 确保路径正确
  
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    // components: {
    //   LatexRenderer,
    // },
    data() {
    return {
      tagValue: '',
    };
    },
    mounted() {
        this.$nextTick(() => {
        const element = document.querySelector(`#${this.id}`);
        if (element) {
            this.tagValue = element.getAttribute('data-tag');
        } else {
            this.tagValue = 'No tag found';
        }
        });
  },
  };
  </script>