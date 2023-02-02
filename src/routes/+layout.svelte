<script>
  import { afterUpdate } from 'svelte'
  import { page } from '$app/stores'
  import { reveal } from '$lib/utils'
  import Transition from '$lib/components/transition.svelte'
  import Nav from '$lib/components/nav.svelte'
  import Footer from '$lib/components/footer.svelte'

  afterUpdate(() => {
    reveal.once()
  })

</script>

<Transition path={$page.url.pathname}/>
<Nav path={$page.url.pathname}/>
<slot></slot>
<Footer />