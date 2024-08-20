<template>
    <div class="latex-container">
      <div v-for="(item, index) in latexItems" :key="index" class="latex-item">
        <div class="latex-number">[{index + 1}]</div>
        <div class="latex-code" v-html="renderLatex(item.code)"></div>
      </div>
    </div>
  </template>
  
  <script>
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
  
  export default {
    name: 'LaTeXWithNumbering',
    props: {
      latexItems: {
        type: Array,
        required: true,
      },
    },
    methods: {
      renderLatex(code) {
        return katex.renderToString(code, {
          throwOnError: false,
          displayMode: true, // Use display mode for block-level equations
        });
      },
    },
  }
  </script>
  
  <style scoped>
  .latex-container {
    margin: 1em 0;
  }
  .latex-item {
    margin-bottom: 1em;
  }
  .latex-number {
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  .latex-code {
    /* Optional: Adjust spacing and alignment as needed */
  }
  </style>
  