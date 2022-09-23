<script>

  let transition
  let transitionClose

  const reveal = () => {
    setTimeout(() => {
      transitionClose = 'transition-close'
    }, 250)

    setTimeout(() => {
      transition = 'hidden'
    }, 1650)
  }

  reveal()

</script>



<div class="transition {transitionClose} {transition}">
  <p>ya-johnson</p>
  <div class="col col1"></div>
  <div class="col col2"></div>
  <div class="col col3"></div>
  <div class="col col4"></div>
  <div class="col col5"></div>
  <div class="col col6"></div>
  <div class="col col7"></div>
  <div class="col col8"></div>
  <div class="col col9"></div>
  <div class="col col10"></div>
</div>

<style>

  .transition {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    z-index: 40;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    color: var(--bg);
    font-size: 80px;
    font-weight: 700;
    transform: translate(-50%, -50%);
  }

  .col {
    height: 100vh;
    width: calc(100%/10);
    background-color: var(--black);
    transform-origin: left;
    transition: all ease-out .4s;
  }

  .transition-close > p {
    opacity: 0;
  }

  .transition-close > .col {
    transform: translateY(100vh);
  }

  .hidden {
    display: none;
  }

  .col1 {
    transition-delay: 0.1s;
  }

  .col2 {
    transition-delay: 0.2s;
  }

  .col3 {
    transition-delay: 0.3s;
  }

  .col4 {
    transition-delay: 0.4s;
  }

  .col5 {
    transition-delay: 0.5s;
  }

  .col6 {
    transition-delay: 0.6s;
  }

  .col7 {
    transition-delay: 0.7s;
  }

  .col8 {
    transition-delay: 0.8s;
  }

  .col9 {
    transition-delay: 0.9s;
  }

  .col10 {
    transition-delay: 1s;
  }

</style>