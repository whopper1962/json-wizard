<template>
  <!-- <PrismEditor
    class="my-editor height-400"
    v-model="inputedCode"
    :highlight="highlighter"
    :readonly="!editMode"
    line-numbers
  /> -->
  <CodeEditor
    :language_selector="false"
    :hide_header="true"
    :wrap_code="false"
    selector_height="70vh"
    selector_width="98vh"
    font_size="13px"
    class="my-editor height-400"
    v-model="inputedCode"
  />
</template>

<script>
// import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import CodeEditor from 'simple-code-editor';

export default {
  components: {
    // PrismEditor,
    CodeEditor
  },
  data () {
    return {
      code: 'console.log("Hello World")'
    };
  },
  props: {
    value: [String, Number],
    editMode: [Boolean]
  },
  computed: {
    inputedCode: {
      get () {
        return this.value;
      },
      set (code) {
        this.$emit('input', code);
      }
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    }
  }
}
</script>

<style>
.height-400 {
  height: 70vh !important;
  /* height: 96%; */
  margin-top: 10px;
  width: 98vh !important;
}
/* .prism-editor__container {
  max-width: 50px;
  overflow: hidden;
}
.prism-editor__textarea {
  max-width: 50px !important;
  overflow: hidden !important;
} */
div.prism-editor-wrapper {
  max-width: 200px;
}
.my-editor {
  width: inherit;
  border-radius: 8px;
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  /* line-height: 1.5; */
  padding: 5px;
}
.prism-editor__textarea:focus {
  outline: none;
}
/* div.prism-editor-wrapper {
    max-height: 200px;
    max-width: 100px;
    overflow-y: auto;
    overflow-x: scroll;
} */
.prism-editor-wrapper .prism-editor__editor, .prism-editor-wrapper .prism-editor__textarea {
  overflow-wrap: anywhere;
  font-size: 12px;
}
</style>