<script>
  import Prism from 'prismjs'

  export let language
  export let filePath
  export let source
</script>

<div class="code">
  <p class="file-path">{filePath}</p>
  {@html Prism.highlight(source, Prism.languages[language])}
</div>

