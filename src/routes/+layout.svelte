<script>
  import { afterUpdate } from 'svelte'
  import { reveal } from '$lib/utils'
  import { width, height, scrollY, scrollX } from '../stores'
  import Transition from '$lib/components/transition.svelte'
  import Nav from '$lib/components/nav.svelte'
  import Footer from '$lib/components/footer.svelte'

  afterUpdate(() => {
    $scrollY = 0
    reveal.once()
  })

</script>

<svelte:window bind:innerWidth={$width} 
               bind:innerHeight={$height} 
               bind:scrollY={$scrollY}
               bind:scrollX={$scrollX} />

<div class="svelte-root">
  <Transition />
  <Nav />
  <slot></slot>
  <Footer />
</div>


<style>
  
  .svelte-root {
    overflow-x: hidden;
  }
</style>