<script>
  import { afterUpdate } from 'svelte'
  import { reveal } from '$lib/utils'
  import Transition from '$lib/components/transition.svelte'
  import Nav from '$lib/components/nav.svelte'
  import Footer from '$lib/components/footer.svelte'

  afterUpdate(() => {
    window.scrollTo(0,0)
    reveal.once()
  })

</script>

<Transition />
<Nav />
<slot></slot>
<Footer />