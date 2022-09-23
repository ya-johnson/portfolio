<script type="module">

  const cols = document.querySelectorAll('.col')
  
</script>

<div class="transition">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>

<style>

  .transition {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .col {
    height: 100vh;
    width: calc(100%/12);
    background-color: var(--black);
    transform-origin: left;
    transition: all ease-out .3s;
  }

</style>