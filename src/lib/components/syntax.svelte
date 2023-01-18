<script>
  import Prism from 'prismjs'

  export let language
  export let source

</script>


<div class="code">
  {@html Prism.highlight(source, Prism.languages[language])}
</div>
