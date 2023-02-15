<script>
  import { refractor } from 'refractor'
  import jsx from 'refractor/lang/jsx'
  import { toHtml } from 'hast-util-to-html'

  export let filepath
  export let language
  export let code

  refractor.register(jsx)

</script>


<div class='syntax'>
  <p>{filepath}</p>
  <pre>
    <code>
      {@html toHtml(refractor.highlight(code, language))}
    </code>
  </pre>
</div>

<style>
  
  .syntax {
    overflow-x: scroll;
    font-family: 'Source Code Pro', monospace;
    padding: 18px;
    margin: 60px 0;
    box-shadow: #6272a4 8px 8px 0 0;
    background-color: #282c34;
  }

  p {
    color: #e5e7eb;
    width: fit-content;
    padding-bottom: 4px;
    border-bottom: solid 2px #6272a4;
  }

</style>