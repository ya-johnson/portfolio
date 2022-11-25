<script>
  import { afterUpdate } from 'svelte'
  import { page } from '$app/stores'
  import Transition from '$lib/components/transition.svelte'
  import Nav from '$lib/components/nav.svelte'
  import Footer from '$lib/components/footer.svelte'
  import * as reveal from '$lib/functions/reveal'

  afterUpdate(() => {
    reveal.once()
  })

</script>

<Transition path={$page.url.pathname}/>
<Nav path={$page.url.pathname}/>
<slot></slot>
<Footer />