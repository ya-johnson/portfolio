<script>
  export let text
  export let color
</script>

<div class="bar bg-{color}">
  <p class="bar-text">{text}</p>
  <p class="bar-text">{text}</p>
  <p class="bar-text">{text}</p>
  <p class="bar-text">{text}</p>
</div>

<style>

  .bar {
    overflow: visible;
    display: flex;
    align-items: center;
    padding: 12px 0;
    border: solid 2px var(--black);
  }

  .bar-text {
    font-size: 4vw;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    white-space: nowrap;
    margin-left: 20px;
    margin-bottom: 0;
    animation: slide linear infinite 20s;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  @media screen and (max-width: 991px) {
    .bar-text {
      font-size: 4vh;
    }
  }

</style>