<script>
  import { onMount } from 'svelte'
  import * as reveal from '$lib/functions/reveal'
  import Transition from '$lib/components/transition.svelte'
  import Nav from '$lib/components/nav.svelte'
  import Bar from '$lib/components/bar.svelte'
  import Footer from '$lib/components/footer.svelte'
  import F1boxHome from '$lib/assests/Screenshot 2022-09-30 at 21-20-44 F1 box.png'


  onMount(() => {
    reveal.once()
  })
</script>

<Transition />
<Nav />

<main>
  <section class="project-hero">
    <div class="container f-jsb">
      <div class="project-hero-left">
        <h1 class="delay-1200 hidden">F1 box</h1>
        <p class="delay-1400 hidden">
          As a Formula 1 fan i grow to understand the importance of the sports data,
          and after a disappointing search for a platform, I decided to create one.
        </p>
        <p class="delay-1400 hidden">
          F1 box is a hub and a platform for analysing Formula 1 data.
          It goes back from the first F1 race in 1950 up to the most current one.
          Features an in depth Race, Drivers, Constructors analytics and information,
          as well as News and Press gathered from popular publishers.
        </p>
        <p class="delay-1400 hidden">
            Build with: Next-Js, Supabase, Zustand, Tailwind. <br/>
            Powered by <a href="https://ergast.com/mrd/" target="__blank">Ergrast F1 API.</a>
        </p>
        <div class="project-links delay-1600 hidden">
          <a href="/" class="btn bg-white">Live</a>
          <a href="/" class="btn bg-yellow">Source</a>
        </div>
      </div>
    </div>
  </section>

  <section class="case-demo">
    <div class="container f-jsb">
      <div class="case-demo-left">
        <h3>App Demo</h3>
        <ul>
          <li>Home</li>
          <li>Race</li>
          <li>Standings</li>
          <li>Drivers</li>
          <li>Constructors</li>
          <li>Compare</li>
          <li>Race Simulator</li>
          <li>Theme toggle</li>
        </ul>
      </div>
      <div class="case-demo-right">
        <img src={F1boxHome} alt="">
      </div>
    </div>
  </section>

  <Bar type='design' />
  <section>
    <div class="container">
      <div class="case-design">
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
      </div>
    </div>
  </section>
  <Bar type='development' />

  <section>
    <div class="container">
      <div class="case-dev">
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
      </div>
    </div>
  </section>

  <Footer />

</main>


<style>

</style>