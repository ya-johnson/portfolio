<script>
  import Github from './github.svelte'
  import Email from './email.svelte'
</script>

<footer id="contact">
  <div class="container">
    <div>
      <div>
        <p>Contact Me</p>
        <p> My inbox is always open,</p>
        <p> whether you want to work to together or just say hi.</p>
      </div>
      <!-- <p>Find out what i'm up to on <a href="https://github.com/ya-johnson">Github</a></p> -->
      <Github color='pink'/>
    </div>
    <Email color='pink' />
    <p class="rights">@ya-johnson 2022 | Build with SvelteKit</p>
  </div>
</footer>

<style>

  footer {
    position: relative;
    min-height: 440px;
    margin-top: 100px;
    padding-top: 80px;
    border-top: 2px solid var(--black);
    background-color: var(--pink);
    z-index: 0;
  }

  .container {
    max-width: 960px;
  }

  .container > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .container p {
    line-height: 20px;
    margin-bottom: 4px;
  }

  .container > div  p:first-of-type {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    margin-bottom: 14px;
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