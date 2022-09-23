<script>
  import Nav from '../lib/components/nav.svelte'
  import Title from '../lib/svg/title.svelte'
</script>

<Nav />
<main>
  <div class="hero container">
    <Title />
  </div>
</main>


<style>

  .hero {
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  
</style>