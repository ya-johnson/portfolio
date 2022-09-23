<script>

let menuBtn
let menu

const toggleMenu = () => {
    if (menuBtn == null && menu == null) {
      menuBtn = 'menu-btn-open'
      menu = 'menu-open'
    } 
    else {
      menuBtn = null
      menu = null
    }
  }
  
</script>

<nav>
  <div class="container f-jsb">
    <div class="logo border">
      <a href="/">ya-johnson</a>
    </div>

    <div class="menu-btn border {menuBtn}" on:click={toggleMenu}>
      <div class="bar-1"></div>
      <div class="bar-2"></div>
    </div>
     
  </div>
</nav>

<div class="menu border {menu}">
  <div class="container f-jsb">
    <div class="projects f-col">
      <p>Projects</p>
      <a href="/projects/f1-box"><span>01</span> F1 box</a>
      <a href="/projects/freeze-point"><span>02</span> Freeze Point</a>
    </div>
    <div class="info">
      <a href="https://github.com/ya-johnson">github</a>
    </div>
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
    font-size: 20px;
    font-weight: 500;
    padding: 8px 20px;
    border-radius: 12px;
  }

  .menu-btn {
    right: 24px;
    height: 50px;
    width: 50px;
    justify-content: center;
    border-radius: 50%;
  }

  .logo::before,
  .menu-btn::before {
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

  .logo::before {
    border-radius: 12px;
  }

  .menu-btn::before {
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

  .logo:hover::before,
  .menu-btn:hover::before {
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

  .menu {
    visibility: hidden;
    position: fixed;
    top: 100%;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--yellow);
    transition: all ease-out .15s;
    z-index: 10;
  }

  .menu > .container {
    height: 100%;
  }

  .projects > p {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .projects > a {
    font-size: 2rem;
    font-weight: 500;
  }

  .projects > a > span {
    font-size: 1.2rem;
  }

  .menu-open {
    visibility: visible;
    top: 0;
  }

</style>