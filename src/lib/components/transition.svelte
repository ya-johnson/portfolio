<script>

  let transition
  let transitionClose

  const reveal = () => {
    setTimeout(() => {
      transitionClose = 'transition-close'
    }, 250)

    setTimeout(() => {
      transition = 'hidden'
    }, 1200)
  }

  reveal()

</script>



<div class="transition {transitionClose} {transition}">
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
  <div class="col col11"></div>
  <div class="col col12"></div>
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

  .col {
    height: 100vh;
    width: calc(100%/10);
    background-color: var(--black);
    transform-origin: 100% 50%;
    transition: all ease-out .35s;
  }

  .transition-close > .col {
    transform: translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotate(0);
  }

  .hidden {
    display: none;
  }

  .col1 {
    transition-delay: .05s;
  }

  .col2 {
    transition-delay: .1s;
  }

  .col3 {
    transition-delay: .15s;
  }

  .col4 {
    transition-delay: .2s;
  }

  .col5 {
    transition-delay: .25s;
  }

  .col6 {
    transition-delay: .3s;
  }

  .col7 {
    transition-delay: .35s;
  }

  .col8 {
    transition-delay: .4s;
  }

  .col9 {
    transition-delay: .45s;
  }

  .col10 {
    transition-delay: .5s;
  }

  .col11 {
    transition-delay: .55s;
  }

  .col12 {
    transition-delay: .6s;
  }

</style>