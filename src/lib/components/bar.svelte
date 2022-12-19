<script>
  export let type
</script>

{#if type === 'idea'}
  <div class="bar bg-purple">
    <p class="bar-text">great idea can come from anywhere ~</p>
    <p class="bar-text">great idea can come from anywhere ~</p>
    <p class="bar-text">great idea can come from anywhere ~</p>
    <p class="bar-text">great idea can come from anywhere ~</p>
  </div>
{:else if type === 'share'}
<div class="bar bg-blue">
  <p class="bar-text">sharing is caring ✽ sharing is caring ✽</p>
  <p class="bar-text">sharing is caring ✽ sharing is caring ✽</p>
  <p class="bar-text">sharing is caring ✽ sharing is caring ✽</p>
  <p class="bar-text">sharing is caring ✽ sharing is caring ✽</p>
</div>
{:else if type === 'design'}
  <div class="bar bg-white">
    <p class="bar-text">design • design • design • design •</p>
    <p class="bar-text">design • design • design • design •</p>
    <p class="bar-text">design • design • design • design •</p>
    <p class="bar-text">design • design • design • design •</p>
  </div>
{:else if type === 'development'}
  <div class="bar bg-yellow">
    <p class="bar-text">development ◆ development ◆</p>
    <p class="bar-text">development ◆ development ◆</p>
    <p class="bar-text">development ◆ development ◆</p>
    <p class="bar-text">development ◆ development ◆</p>
  </div>
{/if}

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