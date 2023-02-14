<script>
  import Highlight from 'svelte-highlight'
  import javascript from 'svelte-highlight/languages/javascript'
  import { snazzy } from 'svelte-highlight/styles'

  export let filepath
  export let code
</script>

<svelte:head>{@html snazzy}</svelte:head>

<div class='code'>
  <p>{filepath}</p>
  <Highlight language={javascript} {code} />
</div>

<style>
  
  .code {
    font-family: 'Source Code Pro', monospace;
    padding: 12px 12px 12px 0;
    margin: 60px 0;
    box-shadow: #6272a4 8px 8px 0 0;
    background-color: #282a36;
  }

  p {
    color: #F9F9F9;
    width: fit-content;
    padding-bottom: 4px;
    margin-left: 18px;
    border-bottom: solid 2px #6272a4;
  }

</style>