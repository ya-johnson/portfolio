<script>
  import Github from './github.svelte'
  import Email from './email.svelte'
</script>

<footer id="contact">
  <div class="container">
    <p class="title">Contact Me</p>
    <div>
      <div class="hide delay-200">
        <p> My inbox is always open,</p>
        <p> whether you want to work to together or just say hi.</p>
      </div>
      <Github color='pink' size='normal'/>
    </div>
    <Email color='pink' size='normal'/>
    <p class="rights">@ya-johnson 2022 | Build with 
      <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
    </p>
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

  .container > div  p {
    line-height: 20px;
    margin-bottom: 4px;
    margin-right: 40px;
  }

  .title {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    margin-bottom: 8px;
  }

  .rights {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  @media screen and (max-width: 991px) {

    .container > div {
      padding-right: 20px;
    }
  }

  @media screen and (max-width: 600px) {


  }

  @media screen and (max-width: 500px) {

    footer {
      min-height: 380px;
    }
  }

</style>