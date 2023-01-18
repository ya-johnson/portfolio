<script>
  import Bar from './bar.svelte'
  import Email from './email.svelte'

</script>

<footer id="contact">
  <Bar text='contact me ✉ contact me ✉' color='pink' />
  <div class="container">

    <div class="footer-main">
      <div class="links">
        <Email color='pink'/>
      </div>

    </div>

    <p class="rights">@ya-johnson 2022 | Build with SvelteKit</p>
  </div>
</footer>

<style>

  footer {
    position: relative;
    min-height: 400px;
    margin-top: 100px;
    background-color: var(--pink);
    z-index: 0;
  }

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .footer-main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .links {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .rights {
    position: absolute;
    bottom: 10px;
    left: 50%;
    font-weight: 500;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 768px) {

    footer {
      min-height: 340px;
      padding: 80px 0;
    }

    .links {
      top: 50px;
    }
  }

  @media screen and (max-width: 600px) {

    footer {
      min-height: 280px;
      padding: 60px 0;
    }

    .links {
      top: 40px;
    }
  }

  @media screen and (max-width: 500px) {

    .links {
      top: 40px;
      left: -25%;
    }
  }

</style>