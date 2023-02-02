<script>
  import { page } from '$app/stores'
  import { isMenu } from '../../stores'
  import Email from './email.svelte'

  let menu

  $: if ($page.url.pathname) afterNavigate()

  const toggleMenu = () => !menu ? menu = true : menu = false

  const afterNavigate = () => {
    if (!$isMenu && menu) {
      $isMenu = true
      menu = false
    }
  }

</script>

<nav>
  <div class="container f-jsb delay-1400 hide">
    <div>
      <a class="logo border"href="/">ya-johnson</a>
    </div>

    <div class="menu-btn border {menu && 'menu-btn-open'}" on:click={toggleMenu} on:keypress={toggleMenu}>
      <div class="bar-1"></div>
      <div class="bar-2"></div>
    </div>
     
  </div>
</nav>

{#if $isMenu}
  <div class="background"></div>
{/if}

<div class="menu {menu && 'menu-open'}">
  <div class="shutter">
    <div class="col col12"></div>
    <div class="col col11"></div>
    <div class="col col10"></div>
    <div class="col col9"></div>
    <div class="col col8"></div>
    <div class="col col7"></div>
    <div class="col col6"></div>
    <div class="col col5"></div>
    <div class="col col4"></div>
    <div class="col col3"></div>
    <div class="col col2"></div>
    <div class="col col1"></div>
  </div>
  <div class="menu-content container f-jsb">
    <div class="projects f-col">
      <p>Projects</p>
      <a href="/projects/f1-box"><span>01</span> F1 box</a>
      <a href="/projects/freeze-point"><span>02</span> Freeze Point</a>
    </div>
    <div class="info">
      <a href="https://github.com/ya-johnson">github</a>
    </div>
    <Email color='yellew' position='center-down'/>
  </div>
 </div>

<style>

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding-top: 40px;
    background-color: transparent;
    z-index: 20;
  }

  nav > .container {
    position: relative;
  }

  .logo,
  .menu-btn {
    cursor: pointer;
    position: absolute;
    top: 0px;
    background-color: var(--white);
    transition: all ease-out .15s;
  }

  .logo {
    left: 20px;
    padding: 8px 20px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    border-radius: 12px;
  }

  .menu-btn {
    right: 24px;
    height: 50px;
    width: 50px;
    justify-content: center;
    border-radius: 50%;
  }

  .logo::after,
  .menu-btn::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    height: 100%;
    width: 100%;
    border: solid 2px var(--black);
    background-color: var(--black);
    transition: all ease-out .15s;
    z-index: -1;
  }

  .logo::after {
    border-radius: 12px;
  }

  .menu-btn::after {
    border-radius: 50%;
  }

  .logo:hover {
    top: 4px;
    left: 24px;
  }

  .menu-btn:hover {
    top: 4px;
    right: 20px;
  }

  .logo:hover::after,
  .menu-btn:hover::after {
    top: 0px;
    left: 0px;
  }

  .bar-1,
  .bar-2 {
    position: absolute;
    left: 50%;
    height: 2px;
    width: 18px;
    transform: translateX(-50%);
    background-color: var(--black);
    transition: all ease-out .15s;
  }

  .bar-1 {
    top: calc(50% - 4px);
  }

  .bar-2 {
    top: calc(50% + 4px);
  }

  .menu-btn-open > .bar-1 {
    top: 50%;
    left: 30%;
    transform: rotate(45deg);
  }

  .menu-btn-open > .bar-2 {
    top: 50%;
    left: 30%;
    transform: rotate(-45deg);
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--black);
    z-index: 5;
  }

  .menu {
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all ease-out .35s;
    z-index: 10;
  }

  .menu-open {
    visibility: visible;
  }

  .shutter {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
  }

  .col {
    background-color: var(--yellow);
    transform-origin: 100% 50%;
    transform: translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotate(0);
  }

  .menu-open > .shutter > .col {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotate(0);
  }

  .col1 {
    transition-delay: .4s;
  }

  .col2 {
    transition-delay: .45s;
  }

  .col3 {
    transition-delay: .5s;
  }

  .col4 {
    transition-delay: .55s;
  }

  .col5 {
    transition-delay: .6s;
  }

  .col6 {
    transition-delay: .65s;
  }

  .col7 {
    transition-delay: .7s;
  }

  .col8 {
    transition-delay: .75s;
  }

  .col9 {
    transition-delay: .8s;
  }

  .col10 {
    transition-delay: .85s;
  }

  .col11 {
    transition-delay: .9s;
  }

  .col12 {
    transition-delay: .95s;
  }

  .menu-open > .shutter > .col1 {
    transition-delay: .05s;
  }

  .menu-open > .shutter > .col2 {
    transition-delay: .1s;
  }

  .menu-open > .shutter > .col3 {
    transition-delay: .15s;
  }

  .menu-open > .shutter > .col4 {
    transition-delay: .2s;
  }

  .menu-open > .shutter > .col5 {
    transition-delay: .25s;
  }

  .menu-open > .shutter > .col6 {
    transition-delay: .3s;
  }

  .menu-open > .shutter > .col7 {
    transition-delay: .35s;
  }

  .menu-open > .shutter > .col8 {
    transition-delay: .4s;
  }

  .menu-open > .shutter > .col9 {
    transition-delay: .45s;
  }

  .menu-open > .shutter > .col10 {
    transition-delay: .5s;
  }

  .menu-open > .shutter > .col11 {
    transition-delay: .55s;
  }

  .menu-open > .shutter > .col12 {
    transition-delay: .6s;
  }

  .menu > .container {
    position: relative;
    height: 100%;
    opacity: 0;
    filter: blur(2px);
    transform: translateY(60px);
    transition-duration: .35s;
    transition-delay: 0;
    transition-property: all;
    transition-timing-function: ease-out;
  }

  .menu-open > .container {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transition-delay: 1.2s;
  }

  .projects > p {
    font-size: 60px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .projects > a {
    font-size: 2rem;
    font-weight: 500;
  }

  .projects > a > span {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 991px) {

    .logo {
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 768px) {

    .logo {
      font-size: 16px;
      line-height: 22px;
      padding: 8px 12px;
    }

    .menu-btn {
      height: 42px;
      width: 42px;
    }

    .bar-1,
    .bar-2 {
      width: 14px;
    }

  }

</style>