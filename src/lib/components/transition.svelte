<script>
  import { isMenu } from '../../stores'

  export let path
  let transition
  let transitionClose
  let isNavMenu
  
  $: if (path) reveal()
  isMenu.subscribe(state => isNavMenu = state)


  const reveal = () => {
    setTimeout(() => {
      if (isNavMenu) {
        setTimeout(() => {
          isMenu.update(state => state = false)
          transitionClose = null
          transition = null
          reveal()
        }, 900)
      }
      else if (!transition && !transitionClose) {
        setTimeout(() => {
          transitionClose = 'transition-close'
        }, 250)

        setTimeout(() => {
          transition = 'hidden'
        }, 1100)
      } 
      else {
        transitionClose = null
        transition = null
        reveal()
      }
    }, 50)
  }

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
    transform-origin: 100% 50%;
    background-color: var(--black);
  }

  .transition-close > .col {
    transform: translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotate(0);
  }

  .hidden {
    display: none;
  }

</style>