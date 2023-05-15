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
          <a href="https://nextjs.org/" class="stack-btn" target="_blank" rel="noreferrer">Next</a>
          <a href="https://swr.vercel.app/" class="stack-btn" target="_blank" rel="noreferrer">SWR</a>
          <a href="https://github.com/pmndrs/zustand" class="stack-btn" target="_blank" rel="noreferrer">Zustand</a>
          <a href="https://cheerio.js.org/" class="stack-btn" target="_blank" rel="noreferrer">Cheerio</a>
          <a href="https://recharts.org/" class="stack-btn" target="_blank" rel="noreferrer">Recharts</a>
          <a href="https://tailwindcss.com/" class="stack-btn" target="_blank" rel="noreferrer">Tailwind</a>
        </div>
        <p class="delay-200 hide">
            Powered by 
            <a href="https://ergast.com/mrd/" class="underline" target="_blank" rel="noreferrer">Ergrast F1 API.</a>
        </p>
        <div class="proj-links delay-400 hide">
          <a href="https://f1-box.vercel.app/" class="btn bg-white" target="_blank" rel="noreferrer">Live</a>
          <a href="https://github.com/ya-johnson/f1-box" class="btn bg-yellow" target="_blank" rel="noreferrer">Source</a>
          <!-- <a href="/projects/f1-box" class="btn bg-purple">Case Study</a> -->
        </div>
      </div>
      <div class="proj-right delay-400 hide">
        <img src='/assets/gifs/f1box-small.gif' alt="" loading="lazy">
      </div>
    </div>

    <div class="proj">
      <div class="proj-left">
        <h3 class="hide">Freeze Point</h3>
        <p class="delay-200 hide">
          Freeze Point is a Social Blogging App, with the intention
          of providing platform of knowledge sharing for
          Writers and Readers who apprciate the written word.
          Features Auth, Pagination, Search, Rich Text Editor, Supports
          Images, CRUD functionality and other cool stuff.
        </p>
        <div class="proj-stack delay-200 hide">
          <a href="https://nodejs.org/" class="stack-btn" target="_blank" rel="noreferrer">Node</a>
          <a href="http://expressjs.com/" class="stack-btn" target="_blank" rel="noreferrer">Express</a>
          <a href="https://www.mongodb.com/" class="stack-btn" target="_blank" rel="noreferrer">MongoDB</a>
          <a href="https://jwt.io/" class="stack-btn" target="_blank" rel="noreferrer">JWT</a>
          <a href="https://cloudinary.com/" class="stack-btn" target="_blank" rel="noreferrer">Cloudinary</a>
          <a href="http://reactjs.org/" class="stack-btn" target="_blank" rel="noreferrer">React</a>
          <a href="https://github.com/molefrog/wouter" class="stack-btn" target="_blank" rel="noreferrer">Wouter</a>
          <a href="https://github.com/pmndrs/zustand" class="stack-btn" target="_blank" rel="noreferrer">Zustand</a>
          <a href="https://tailwindcss.com/" class="stack-btn" target="_blank" rel="noreferrer">Tailwind</a>
          <a href="https://www.docker.com/" class="stack-btn" target="_blank" rel="noreferrer">Docker</a>
        </div>
        <div class="proj-links delay-400 hide">
          <a href="https://freezepoint-client.vercel.app/" class="btn bg-white" target="_blank" rel="noreferrer">Live</a>
          <a href="https://github.com/ya-johnson/freeze-point" class="btn bg-yellow" target="_blank" rel="noreferrer">Source</a>
          <!-- <a href="/projects/freeze-point" class="btn bg-purple">Case Study</a> -->
        </div>
      </div>
      <div class="proj-right delay-400 hide">
        <img src='/assets/gifs/freeze-small.gif' alt="" loading="lazy">
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
    margin-bottom: 30px;
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
    border: 2px solid var(--black);
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

  @media screen and (max-width: 1140px) {

    .about,
    .proj {
      flex-direction: column;
      height: auto;
    }

    .about-left,
    .proj-left,
    .proj-right {
      width: 100%;
    }

    .about-left {
      display: flex;
      justify-content: center;
      margin-bottom: 60px;
    }

    .about-left-text {
      width: 80%;
      top: 10%;
      left: 60%;
      padding: 0 20px;
      transform: translateX(-50%);
    }

    .about-left-text > p:first-of-type {
      font-size: 22px;
      line-height: 24px;
    }

    .about-right {
      width: 80%;
      padding: 40px 0;
    }

    .projects > h2,
    .blog > h2 {
      margin-bottom: 12px;
    }

    .proj {
      padding: 40px 0;
    }

    .proj:first-of-type {
      margin-bottom: 60px;
    }

    .proj-left > p {
      width: 70%;
    }

    .proj-right {
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 991px) {

    .about-left-text {
      width: 90%;
      top: 15%;
      left: 55%;
      transform: translateX(-50%);
    }
    
    .about-left-text > p:nth-child(2) {
      margin-bottom: 20px;
    }

    .quete-box {
      right: -120px;
    }

    .proj {
      padding: 20px 0;
    }
  }

  @media screen and (max-width: 768px) {

    .about-left-text {
      left: 50%;
      transform: translateX(-50%);
    }

    .about-left-text > p:not(:first-of-type) {
      width: 100%;
    }

    .about-left-text > p:nth-child(2) {
      font-size: 34px;
      line-height: 38px;
      width: 100%;
    }

    .quete-box {
      top: -200px;
      right: -160px;
    }

    .proj-left > p {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {

    .about-left {
      margin-bottom: 10px;
    }

    .about-left-text {
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
    }

    .about-left-text > p:first-of-type {
      font-size: 18px;
      line-height: 20px;
    }

    .about-left-links {
      margin-top: 20px;
    }

    .quete-box {
      right: -180px;
    }
  }

  @media screen and (max-width: 400px) {


  }

</style>