<script>
  import Bar from '$lib/components/bar.svelte'
  import Title from '$lib/svg/title.svelte'
  import Polygon from '$lib/svg/polygon.svelte'
  import Peep from '$lib/svg/peep.svelte'
  import Quete from '$lib/svg/quete.svelte'

</script>

<main>
  <section class="hero container">
    <Title />
  </section>

  <section class="about container f-jsb">
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
          <a href="/#contact" class="btn bg-pink">Let's Talk</a>
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

  <section class="projects container">
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
          <p class="proj-stack-btn">Next-Js</p>
          <p class="proj-stack-btn">Zustand</p>
          <p class="proj-stack-btn">SWR</p>
          <p class="proj-stack-btn">Cheerio</p>
          <p class="proj-stack-btn">Tailwind</p>
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
        <img src='/images/Screenshot 2022-09-30 at 21-20-44 F1 box.png' alt="">
      </div>
    </div>

    <div class="proj">
      <div class="proj-left">
        <h3 class="hide">Freeze Point</h3>
        <p class="delay-200 hide">
          Freeze Point is a Social Blogging App, with the intention
          of providing platform of knowledge sharing for
          Writers and Readers who apprciate the written word.
          unAuthenticated Users can acsses published Posts, while
          Authenticated Users can also Write, Edit, Delete, their
          own posts, and Like & Comment on other Users posts,
          as well as Follow other Users or popular Topics.
        </p>
        <div class="proj-stack delay-200 hide">
          <p class="proj-stack-btn">Node-Js</p>
          <p class="proj-stack-btn">Express</p>
          <p class="proj-stack-btn">MongoDB</p>
          <p class="proj-stack-btn">JWT</p>
          <p class="proj-stack-btn">Cloudinary</p>
          <p class="proj-stack-btn">React</p>
          <p class="proj-stack-btn">Zustand</p>
          <p class="proj-stack-btn">Tailwind</p>
        </div>
        <div class="proj-links delay-400 hide">
          <a href="/" class="btn bg-white">Live</a>
          <a href="https://github.com/ya-johnson/freeze-point" target="__blank" class="btn bg-yellow">Source</a>
          <a href="/projects/freeze-point" class="btn bg-purple">Case Study</a>
        </div>
      </div>
      <div class="proj-right delay-400 hide">
        <img src='/images/Screenshot 2022-09-30 at 21-20-44 F1 box.png' alt="">
      </div>
    </div>
  </section>

  <Bar text='sharing is caring ✽ sharing is caring ✽' color='blue' />

  <section class="blog container">
    <h2>Blog</h2>
    <h3>React</h3>
    <p>01 Navbar - Responsive and Theme toggler with Tailwind</p>
    <h3>Design</h3>
    <p>01 Web Design concepts for Developers</p>
  </section>
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
    right: -200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projects,
  .blog {
    padding: 160px 20px;
  }

  .proj {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 90px 0;
  }

  .proj:not(last-of-type) {
    margin-bottom: 100px;
  }

  .proj-left {
    width: 30%;
  }
  
  .proj-right {
    width: 62.5%;
  }

  .proj-right > img {
    width: 100%;
  }  

  @media screen and (max-width: 991px) {

    .about,
    .proj {
      flex-direction: column;
      height: auto;
    }

    .about,
    .projects,
    .blog {
      padding: 60px 20px;
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
    }

    .about-left-text {
      top: 15%;
      left: 70%;
      transform: translateX(-50%);
    }

    .about-left-text > p:not(:first-of-type) {
      width: 50%;
    }

    .about-left-text > p:first-of-type {
      font-size: 22px;
      line-height: 24px;
    }

    .about-left-text > p:nth-of-type(3),
    .about-left-text > p:last-of-type {
      margin-top: 10px;
    }

    .about-right {
      width: 100%;
      padding: 40px 0;
    }

    .quete-box {
      display: none;
    }

    .proj {
      padding: 40px 0;
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
      top: 20%;
      left: 55%;
      transform: translateX(-50%);
    }

    .about-left-text > p:not(:first-of-type) {
      width: 75%;
    }

    .proj-left > p {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {

    .about-left-text {
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
    }

    .about-left-text > p:first-of-type {
      font-size: 18px;
      line-height: 20px;
    }

    .about-left-text > p:nth-of-type(3),
    .about-left-text > p:last-of-type {
      margin-top: 8px;
    }

    .about-left-links {
      margin-top: 20px;
    }
  }

</style>