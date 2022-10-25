<footer id="contact">
  <div class="container">
    <div class="footer-main">
      <p>Contact Me</p>
      <div class="links">
        <div class="link">
          <div class="email">yonathan@yajohnson.xyz
            <div class="copy">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

      <!-- <div class="links"> -->
        
        <!-- <div class="link">
          <div class="github">github</div>
        </div> -->
      <!-- </div> -->

      <p class="rights">@ya-johnson 2022</p>
  </div>
</footer>

<style>

  footer {
    position: relative;
    min-height: 400px;
    padding: 100px 0;
    margin-top: 100px;
    border-top: 2px solid var(--black);
    background-color: var(--pink);
    z-index: 0;
  }

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .footer-main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-main > p {
    font-size: 60px;
    font-weight: 700;
    line-height: 70px;
  }

  .links {
    position: absolute;
    top: 70px;
    left: -48%;
    transform: translateX(50%);
  }

  .link {
    position: relative;
    margin: 20px 0 140px 0;
  }

  .email {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    font-size: 44px;
    font-weight: 700;
    text-align: center;
    padding: 28px;
    border: 2px solid var(--black);
    border-radius: 20px;
    background-color: var(--pink);
    transition: all ease-out .15s;
  }

  .email::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    border: solid 2px var(--black);
    background-color: var(--black);
    transition: all ease-out .15s;
    z-index: -1;
  }

  .email:hover {
    top: 6px;
    left: 6px;
  }

  .email:hover::before {
    top: 2px;
    left: 2px;
  }

  .copy {
    position: relative;
    height: 34px;
    width: 28px;
    margin-left: 20px;
  }

  .copy > div {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    border: solid 2px var(--black);
  }

  .copy > div:first-of-type {
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: var(--black);
  }

  .copy > div:last-of-type {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--pink);
  }

  .rights {
    position: absolute;
    bottom: 10px;
    left: 50%;
    font-weight: 500;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 768px) {

    footer {
      min-height: 340px;
      padding: 80px 0;
    }

    .footer-main > p {
      font-size: 44px;
      line-height: 50px;
    }

    .links {
      top: 50px;
    }

    .email {
      font-size: 32px;
      padding: 20px;
    }

    .copy {
      position: relative;
      height: 28px;
      width: 22px;
      margin-left: 20px;
    }

    .copy > div:first-of-type {
      top: 4px;
      left: 4px;
    }
  }

  @media screen and (max-width: 600px) {

    footer {
      min-height: 280px;
      padding: 60px 0;
    }

    .footer-main > p {
      font-size: 38px;
      line-height: 44px;
    }

    .links {
      top: 40px;
    }

    .email {
      font-size: 28px;
      padding: 14px;
      border-radius: 12px;
    }

    .email::before {
      top: 4px;
      left: 4px;
      border-radius: 12px;
    }

    .copy {
      position: relative;
      height: 20px;
      width: 16px;
      margin-left: 12px;
    }

    .copy > div {
      border-radius: 6px;
    }

    .copy > div:first-of-type {
      top: 4px;
      left: 4px;
    }
  }

  @media screen and (max-width: 500px) {

    .links {
      top: 40px;
      left: -25%;
    }

    .email {
      font-size: 20px;
      padding: 12px;
      border-radius: 12px;
    }
  }

</style>