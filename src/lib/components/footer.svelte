<script>
  import Email from './email.svelte'
</script>

<footer id="contact">
  <div class="container">
    <p>Contact Me</p>
    <Email color='pink' />
    <p class="rights">@ya-johnson 2022 | Build with SvelteKit</p>
  </div>
</footer>

<style>

  footer {
    position: relative;
    min-height: 400px;
    margin-top: 100px;
    padding-top: 80px;
    border-top: 2px solid var(--black);
    background-color: var(--pink);
    z-index: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container > p:first-of-type {
    font-weight: 700;
    font-size: 54px;
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
    }
  }

  @media screen and (max-width: 600px) {

    footer {
      min-height: 280px;
    }

  }

  @media screen and (max-width: 500px) {

  }

</style>