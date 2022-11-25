<script>

  import { onMount } from 'svelte'
  import Bar from '$lib/components/bar.svelte'
  import Title from '$lib/svg/title.svelte'
  import Polygon from '$lib/svg/polygon.svelte'
  import Peep from '$lib/svg/peep.svelte'
  import Chickies from '$lib/svg/chickies.svelte'
  import F1boxHome from '$lib/assests/Screenshot 2022-09-30 at 21-20-44 F1 box.png'

  onMount(() => {
    window.scrollTo(0,0)
  })

</script>

<main>
  <section class="hero container">
    <Title />
  </section>

  <section class="about container f-jsb">
    <div class="about-left hidden">
      <Polygon />
      <div class="about-left-text">
        <p>Hi, i'm Yonathan,</p>
        <h2>I Build things for the Web.</h2>
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
        <div class="about-left-links delay-400 hidden">
          <a href="/#contact" class="btn bg-pink">Let's Talk</a>
          <a href="https://github.com/ya-johnson/web-dev-resources" 
             class="btn bg-white" target="__blank">Resources</a>
        </div>
      </div>
    </div>

    <div class="about-right delay-400 hidden">
      <Peep />
      <div class="chickies-box">
        <Chickies />
      </div>
    </div>
  </section>

  <Bar type='idea' />

  <section class="projects container">
    <h2 class="hidden">PROJECTS</h2>

    <div class="project p-f1">
      <div class="project-left">
        <h3 class="hidden">F1 box</h3>
        <p class="delay-200 hidden">
          F1 box is a hub and a platform for analysing Formula 1 data.
          It goes back from the first F1 race in 1950 up to the most
          current one. Features an in depth Race, Drivers, Constructors
          analytics and information, as well as News and Press gathered
          from popular publishers.
       </p>
       <p class="delay-200 hidden">
          Build with: Next-Js, Zustand, SWR, Cheerio, Tailwind. <br/>
          Powered by <a href="https://ergast.com/mrd/" target="_blank">Ergrast F1 API.</a>
       </p>
        <div class="project-links delay-400 hidden">
          <a href="/" class="btn bg-white">Live</a>
          <a href="https://github.com/ya-johnson/f1-box" target="_blank" class="btn bg-yellow">Source</a>
          <a href="/projects/f1-box" class="btn bg-purple">Case Study</a>
        </div>
      </div>
      <div class="project-right delay-400 hidden">
        <img src={F1boxHome} alt="">
      </div>
    </div>

    <div class="project">
      <div class="project-left">
        <h3 class="hidden">Freeze Point</h3>
        <p class="delay-200 hidden">
          Freeze Point is a Social Blogging App, with the intention
          of providing platform of knowledge sharing for
          Writers and Readers who apprciate the written word.
          unAuthenticated Users can acsses published Posts, while
          Authenticated Users can also Write, Edit, Delete, their
          own posts, and Like & Comment on other Users posts,
          as well as Follow other Users or popular Topics.
       </p>
       <p class="delay-200 hidden">
          Build with: Node-Js, Express, MongoDB, JWT, Cloudinary,
          React, Zustand, Tailwind.
       </p>
        <div class="project-links delay-400 hidden">
          <a href="/" class="btn bg-white">Live</a>
          <a href="https://github.com/ya-johnson/freeze-point" target="__blank" class="btn bg-yellow">Source</a>
          <a href="/projects/freeze-point" class="btn bg-purple">Case Study</a>
        </div>
      </div>
      <div class="project-right delay-400 hidden">
        <img src={F1boxHome} alt="">
      </div>
    </div>
  </section>

  <Bar type='share' />

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

  .chickies-box {
    visibility: hidden;
    opacity: 0.5;
    position: absolute;
    top: -100px;
    right: -400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all ease-out .25s;
  }

  .about-right:hover > .chickies-box {
    visibility: visible;
    opacity: 1;
    top: -20px;
    right: -200px;
  }

  .projects,
  .blog {
    padding: 160px 20px;
  }

  .project {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 60px 0;
  }

  .project:first-of-type {
    margin-bottom: 100px;
  }

  .project-left {
    width: 45%;
  }
  
  .project-right {
    width: 50%;
  }

  .project-right > img {
    width: 100%;
  }

  .p-f1 > .project-left > p > a {
    text-decoration: underline;
  }

  @media screen and (max-width: 991px) {

    .about,
    .project {
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
    .project-left,
    .project-right {
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
      width: 80%;
      padding: 40px 0;
    }

    .project {
      padding: 40px 0;
    }

    .project-left > p {
      width: 70%;
    }

    .project-right {
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

    .project-left > p {
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