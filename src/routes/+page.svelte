<script>
  import { scrollY } from '../stores'
  import Bar from '$lib/components/bar.svelte'
  import Title from '$lib/svg/title.svelte'
  import Polygon from '$lib/svg/polygon.svelte'
  import Peep from '$lib/svg/peep.svelte'
  import Quete from '$lib/svg/quete.svelte'

  let y

</script>

<main bind:clientHeight={y}>
  <section class="hero container">
    <Title />
  </section>

  <section class="about container py-section f-jsb">
    <div class="about-left hide">
      <Polygon />
      <div class="about-left-text">
        <p>Hi, i'm Yonathan,</p>
        <p>I Build things for the Web.</p>
        <p>
          As Tech enthusiast i'm advocate for Open Source,
          and my work approach motivated by it's principles.
        </p>
        <p>
          I have an intrest in making things and making them good,
          even just for the sake of solving interesting problems.
          I think that a mix of loosenss and firmness in any
          process is key to find creative yet smart solutions.
        </p>
        <p>
          I'm driven by curiousity, and as such it's importent fo me
          to create things that are engaging, readable and self-explanatory.
        </p>
        <div class="about-left-links delay-400 hide">
          <button class="btn bg-pink" on:click={() => $scrollY = y}>Let's Talk</button>
          <a href="https://github.com/ya-johnson/web-dev-resources" class="btn bg-white" target="__blank">Resources</a>
        </div>
      </div>
    </div>

    <div class="about-right delay-400 hide">
      <Peep />
      <div class="quete-box delay-1200 hide">
        <Quete />
      </div>
    </div>
  </section>

  <Bar text='great idea can come from anywhere ~' color='purple'/>

  <section class="projects container py-section">
    <h2 class="hide">PROJECTS</h2>

    <div class="proj">
      <div class="proj-left">
        <h3 class="hide">F1 box</h3>
        <p class="delay-200 hide">
          F1 box is a hub and a platform for analysing Formula 1 data.
          It goes back from the first F1 race in 1950 up to the most
          current one. Features an in depth Race, Drivers, Constructors
          analytics and information, as well as News and Press gathered
          from popular publishers.
        </p>
        <div class="proj-stack delay-200 hide">
          <p class="stack-btn">Next-Js</p>
          <p class="stack-btn">Zustand</p>
          <p class="stack-btn">SWR</p>
          <p class="stack-btn">Cheerio</p>
          <p class="stack-btn">Tailwind</p>
        </div>
        <p class="delay-200 hide">
            Powered by 
            <a href="https://ergast.com/mrd/" class="underline" target="_blank" rel="noreferrer">Ergrast F1 API.</a>
        </p>
        <div class="proj-links delay-400 hide">
          <a href="/" class="btn bg-white">Live</a>
          <a href="https://github.com/ya-johnson/f1-box" target="_blank" class="btn bg-yellow" rel="noreferrer">Source</a>
          <a href="/projects/f1-box" class="btn bg-purple">Case Study</a>
        </div>
      </div>
      <div class="proj-right delay-400 hide">
        <img src='/assets/gifs/f1box.gif' alt="">
      </div>
    </div>

    <div class="proj">
      <div class="proj-left">
        <h3 class="hide">Freeze Point</h3>
        <p class="delay-200 hide">
          Freeze Point is a Social Blogging App, with the intention
          of providing platform of knowledge sharing for
          Writers and Readers who apprciate the written word.
          Features Authentication/Authorization, Pagination, Reach Text Editor, Supports
          Images, CRUD functionality and other cool stuff.
        </p>
        <div class="proj-stack delay-200 hide">
          <p class="stack-btn">Node-Js</p>
          <p class="stack-btn">Express</p>
          <p class="stack-btn">MongoDB</p>
          <p class="stack-btn">JWT</p>
          <p class="stack-btn">Cloudinary</p>
          <p class="stack-btn">React</p>
          <p class="stack-btn">Zustand</p>
          <p class="stack-btn">Tailwind</p>
          <p class="stack-btn">Docker</p>
        </div>
        <div class="proj-links delay-400 hide">
          <a href="/" class="btn bg-white">Live</a>
          <a href="https://github.com/ya-johnson/freeze-point" target="__blank" class="btn bg-yellow">Source</a>
          <a href="/projects/freeze-point" class="btn bg-purple">Case Study</a>
        </div>
      </div>
      <div class="proj-right delay-400 hide">
        <img src='/assets/gifs/freeze.gif' alt="">
      </div>
    </div>
  </section>

  <!-- <Bar text='sharing is caring ✽ sharing is caring ✽' color='blue' />

  <section class="blog container py-section">
    <h2>Blog</h2>
    <div class="blogs">
      <div class="blog-card">
        <div class="blog-card-content">
          <p>01 Navbar - Responsive and Theme toggler with Tailwind</p>
        </div>
      </div>
      <div class="blog-card">
        <div class="blog-card-content">
          <p>01 Web Design concepts for Developers</p>
        </div>
      </div>
      <div class="blog-card">
        <div class="blog-card-content">
          <p>01 Web Design concepts for Developers</p>
        </div>
      </div>
    </div>
  </section> -->
</main>


<style>

  .hero {
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .about {
    height: 100vh;
  }

  .about-left {
    position: relative;
    width: 50%;
  }

  .about-left-text {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-62%);
  }

  .about-left-text > p:not(:first-of-type) {
    width: 75%;
  }

  .about-left-text > p:first-of-type {
    font-size: 24px;
    line-height: 38px;
    font-weight: 500;
    margin-bottom: 0;
  }

  .about-left-text > p:nth-child(2) {
    width: 100%;
    font-size: 44px;
    line-height: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .about-left-links {
    position: relative;
    margin-top: 40px;
  }

  .about-left-links > .bg-white {
    left: 140px;
  }

  .about-left-links > .bg-white:hover {
    left: 142px;
  }

  .about-right {
    position: relative;
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: start;
  }

  .quete-box {
    position: absolute;
    top: -180px;
    right: -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projects > h2,
  .blog > h2 {
    margin-bottom: 80px;
  }

  .proj {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .proj:first-of-type {
    margin-bottom: 200px;
  }

  .proj-left {
    width: 35%;
  }
  
  .proj-right {
    width: 60%;
  }

  .proj-right > img {
    width: 100%;
  }

  .blogs {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .blog-card {
    width: calc(100% / 3 - 30px);
    border: solid 2px var(--black);
    transition: all ease-out .15s;
  }

  .blog-card:hover {
    box-shadow: var(--black) 6px 6px 0 0;
  }

  .blog-card-content {
    padding: 18px;
    background: var(--white);
  }

  .blog-card-content > p:first-of-type {
    font-size: 24px;
    font-weight: 600;
  }

  @media screen and (max-width: 991px) {

    .about,
    .proj {
      flex-direction: column;
      height: auto;
    }

    .about-left,
    .about-left-text,
    .proj-left,
    .proj-right {
      width: 100%;
    }

    .about-left {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    .about-left-text {
      top: 5%;
      left: 70%;
      transform: translateX(-50%);
    }

    .about-left-text > p:not(:first-of-type) {
      width: 65%;
    }

    .about-left-text > p:first-of-type {
      font-size: 22px;
      line-height: 24px;
    }

    .about-right {
      width: 100%;
      padding: 40px 0;
    }

    .projects > h2,
    .blog > h2 {
      margin-bottom: 0;
    }

    .proj {
      padding: 40px 0;
    }

    .proj:first-of-type {
      margin-bottom: 20px;
    }

    .proj-left > p {
      width: 70%;
    }

    .proj-right {
      margin-top: 80px;
    }
  }

  @media screen and (max-width: 768px) {

    .about-left-text {
      top: 15%;
      left: 55%;
      transform: translateX(-50%);
    }

    .about-left-text > p:not(:first-of-type) {
      width: 85%;
    }

    .quete-box {
      right: -100px;
    }

    .proj-left > p {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {

    .about-left {
      margin-bottom: 40px;
    }

    .about-left-text {
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
    }

    .about-left-text > p:first-of-type {
      font-size: 18px;
      line-height: 20px;
    }

    .about-left-text > p:not(:first-of-type) {
      width: 90%;
    }

    .about-left-links {
      margin-top: 20px;
    }

    .quete-box {
      right: -140px;
    }
  }

  @media screen and (max-width: 400px) {

    .quete-box {
      top: -160;
      right: -160px;
    }
  }

</style>