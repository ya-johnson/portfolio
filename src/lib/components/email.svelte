<script>

  export let color
  export let size
  let vi

  const copyEmail = () => {
    navigator.clipboard.writeText('yonathan@yajohnson.xyz')
    vi.innerHTML = '✔'
    setTimeout(() => {
      vi.innerHTML = ''
    }, 2500)
  }

</script>

<div class="box">
  <div class="email {color} {size}" on:click={copyEmail} on:keydown={copyEmail}>
    yonathan@yajohnson.xyz
    <div class="copy" bind:this={vi}></div>
  </div>
</div>



<style>

  .box {
    position: relative;
    width: 100%;
  }

  .pink,
  .pink > .copy {
    background-color: var(--pink);
  }

  .pink:hover {
    background-color: var(--pink-darker);
  }

  .yellow,
  .yellow > .copy {
    background-color: var(--yellow);
  }

  .yellow:hover {
    background-color: var(--yellow-darker);
  }

  .normal {
    font-size: 58px;
    padding: 34px;
    border-radius: 20px;
    box-shadow: var(--black) 6px 6px 0 0;
  }

  .small {
    font-size: 22px;
    padding: 12px;
    border-radius: 10px;
    box-shadow: var(--black) 4px 4px 0 0;
  }

  .normal > .copy {
    height: 38px;
    width: 30px;
    font-size: 22px;
    margin-left: 34px;
    border-radius: 8px;
    box-shadow: var(--black) 5px 5px 0 0;
  }

  .small > .copy {
    height: 24px;
    width: 18px;
    font-size: 14px;
    margin-left: 14px;
    border-radius: 4px;
    box-shadow: var(--black) 3px 3px 0 0;
  }

  .normal:hover {
    top: 6px;
    left: calc(50% + 6px);
    box-shadow: var(--black) 3px 3px 0 0;
  }

  .small:hover {
    top: 4px;
    left: calc(50% + 4px);
    box-shadow: var(--black) 2px 2px 0 0;
  }

  .email {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    font-weight: 700;
    text-align: center;
    border: 2px solid var(--black);
    transform: translateX(-50%);
    transition: all ease-out .15s;
  }

  .copy {
    position: relative;
    display: flex;
    align-items: center;
    border: solid 2px var(--black);
    transition: all ease-out .15s;
  }

  .email:hover > .copy {
    box-shadow: var(--black) 3px 3px 0 0;
  }

  @media screen and (max-width: 768px) {

    .email {
      font-size: 32px;
      padding: 20px;
    }

    .copy {
      height: 28px;
      width: 22px;
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 600px) {

    .email {
      font-size: 28px;
      padding: 14px;
      border-radius: 12px;
    }

    .copy {
      height: 20px;
      width: 16px;
      margin-left: 12px;
      border-radius: 6px;
    }
  }

  @media screen and (max-width: 500px) {

    .email {
      font-size: 20px;
      padding: 12px;
      border-radius: 12px;
    }
  }
</style>