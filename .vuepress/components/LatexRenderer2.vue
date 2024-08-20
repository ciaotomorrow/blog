<template>
    <div :id="id" class="latex-container" :data-tag="tag">
      <div v-html="renderedLatex"></div>
    </div>
  </template>
  
  <script>
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
  
  export default {
    name: 'LatexRenderer2',
    props: {
      latexCode: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        default: '',
      },
      tag: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        renderedLatex: '', // Store the rendered LaTeX here
      };
    },
    watch: {
      latexCode: 'updateLatex',
      tag: 'updateLatex',
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
      updateLatex() {
        this.renderedLatex = this.renderLatex(this.latexCode + "\\tag{" + this.tag + "}");
      },
    },
    mounted() {
      this.updateLatex(); // Initial render
    },
  };
  </script>
  
  <style scoped>
  .latex-container {
    margin: 1em 0;
  }
  </style>
  