<script>
  import Highlight from 'svelte-highlight'
  import javascript from 'svelte-highlight/languages/javascript'
  // import css from 'svelte-highlight/languages/css'
  import materialDarker from 'svelte-highlight/styles/material-darker'

  // export let language
  // export let filepath
  export let code
</script>

<svelte:head>{@html materialDarker}</svelte:head>

<div class='code'>
  <Highlight language={javascript} {code} />
</div>

<style>
  .code {
    margin: 60px 0;
    box-shadow: #6272a4 8px 8px 0 0;
  }

</style>