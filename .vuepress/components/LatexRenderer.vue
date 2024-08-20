<template>
    <div :id="id" class="latex-container">
      <div v-html="renderLatex(latexCode)"></div>
    </div>
  </template>
  
  <script>
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
  
  export default {
    name: 'LatexRenderer',
    props: {
      latexCode: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        default: '',
      },
    },
    methods: {
      renderLatex(code) {
        try {
          return katex.renderToString(code, {
            throwOnError: false,
            displayMode: true, // Use display mode for block-level equations
          });
        } catch (e) {
          console.error('Error rendering LaTeX:', e);
          return `<p>Error rendering LaTeX: ${e.message}</p>`;
        }
      },
    },
  }
  </script>
  
  <style scoped>
  .latex-container {
    margin: 1em 0;
  }
  </style>
  
  