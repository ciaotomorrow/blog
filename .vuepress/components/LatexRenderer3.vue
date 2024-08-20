<template>
    <div :id="id" class="latex-container">
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
    },
    data() {
      return {
        tag: '',
        renderedLatex: '',
      };
    },
    methods: {
      renderLatex(code) {
        try {
          return katex.renderToString(code, {
            throwOnError: false,
            displayMode: true,
          });
        } catch (e) {
          console.error('Error rendering LaTeX:', e);
          return `<p>Error rendering LaTeX: ${e.message}</p>`;
        }
      },
      updateLatex(tagContent) {
        this.tag = tagContent; // Store the tag content
        this.renderedLatex = this.renderLatex(this.latexCode + `\\tag{${this.tag}}`);
      },
    },
    mounted() {
      this.updateLatex(this.$slots.tag ? this.$slots.tag[0].text : ''); // Get tag content from the slot
    },
  };
  </script>
  
  <style scoped>
  .latex-container {
    margin: 1em 0;
  }
  </style>
  