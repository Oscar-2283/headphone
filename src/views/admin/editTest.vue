<template>
  <div>
    <textarea ref="editor"></textarea>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.ckeditor.com/ckeditor5/32.0.0/classic/ckeditor.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      ClassicEditor.create(this.$refs.editor).then((editor) => {
        this.editor = editor;
      });
    };
    document.head.appendChild(script);
  },
  data() {
    return {
      editor: null,
    };
  },
};
</script>
