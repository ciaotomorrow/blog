<template>
    <span v-html="renderedLatex"></span>
  </template>
  
  <script>
  import katex from "katex";
  import "katex/dist/katex.min.css";
  
  export default {
    props: {
      latexCode: {
        type: String,
        required: true,
      },
    },
    computed: {
      renderedLatex() {
        try {
          return katex.renderToString(this.latexCode, {
            throwOnError: false, // Allows rendering even with errors
            displayMode: false, // Inline formula
          });
        } catch (error) {
          return `Invalid LaTeX: ${error.message}`;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .katex {
    font-size: 1em;
  }
  </style>
  