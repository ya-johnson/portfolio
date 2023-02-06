<script>

  export let color
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
  <div class="email {color}" on:click={copyEmail} on:keydown={copyEmail}>
    yonathan@yajohnson.xyz
    <div class="copy" bind:this={vi}></div>
  </div>
</div>


<style>

  .box {
    position: relative;
    width: 100%;
    margin: 20px 0;
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

  .email {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    font-size: 58px;
    font-weight: 700;
    text-align: center;
    padding: 34px;
    border: 2px solid var(--black);
    border-radius: 20px;
    box-shadow: var(--black) 6px 6px 0 0;
    transform: translateX(-50%);
    transition: all ease-out .15s;
  }

  .email:hover {
    top: 6px;
    left: calc(50% + 6px);
    box-shadow: var(--black) 2px 2px 0 0;
  }

  .copy {
    position: relative;
    height: 38px;
    width: 30px;
    display: flex;
    align-items: center;
    font-size: 22px;
    margin-left: 34px;
    border-radius: 8px;
    border: solid 2px var(--black);
    box-shadow: var(--black) 5px 5px 0 0;
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