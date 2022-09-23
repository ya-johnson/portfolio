<script>
  import Transition from '../lib/components/transition.svelte';
  import Nav from '../lib/components/nav.svelte'
  import Title from '../lib/svg/title.svelte'
  import Polygon from '../lib/svg/polygon.svelte';
</script>

<Transition />
<Nav />
<main>
  <section class="hero container">
    <Title />
  </section>

  <section class="about container f-jsb">
    <div class="about-left">
      <Polygon />
      <div class="about-left-text">
        <p>Hi, i'm Yonathan,</p>
        <h2>I Build things for the Web.</h2>
        <p>
           As Tech enthusiast i'm advocate for Open Source, <br/>
           and my work approach motivated by it's principles.
        </p>
        <p>
           I have an intrest in making things and making them good, <br/>
           even just for the sake of solving interesting problems. <br/>
           I think that a mix of loosenss and firmness in any <br/>
           process is key to find creative yet smart solutions. <br/>
        </p>
        <p>
          I'm driven by curiousity, and as such it's importent fo me <br/>
           to create things that are engaging, readable and self-explanatory.
        </p>
        <div class="about-left-links">
          <a href="/#contact" class="btn pink-btn">Let's Talk</a>
          <a href="https://github.com/ya-johnson/web-dev-resources" 
             class="btn white-btn" target="__blank">Web Dev Resources</a>
        </div>
      </div>
    </div>
  </section>

  <section class="projects container">
    <h2>PROJECTS</h2>

    <div class="projects-f1">
      <h3>F1 box</h3>
      <div class="f-jsb">
        <div class="project-left">
          <p>
            I have an intrest in making things and making them good, <br/>
            even just for the sake of solving interesting problems. <br/>
   
            I think that a mix of loosenss and firmness in any <br/>
            process is key to find creative yet smart solutions. <br/>
   
            I'm driven by curiousity, and as such it's importent fo me <br/>
            to create things that are engaging, readable and self-explanatory.
         </p>
          <div class="project-links">
            <a href="/" class="btn white-btn">Live</a>
            <a href="/" class="btn yellow-btn">Source</a>
            <a href="/" class="btn purple-btn">Case Study</a>
          </div>
        </div>
      </div>

    </div>
    <div class="projects-freeze">
      <h3>Freeze Point</h3>
      <div class="f-jsb">

      </div>
      <div class="project-left">
        <p>
          I have an intrest in making things and making them good, <br/>
          even just for the sake of solving interesting problems. <br/>
 
          I think that a mix of loosenss and firmness in any <br/>
          process are key to find creative yet smart solutions. <br/>
 
          I'm driven by curiousity, and as such it's importent fo me <br/>
          to create things that are engaging, readable and self-explanatory.
       </p>
        <div class="project-links">
          <a href="/" class="btn white-btn">Live</a>
          <a href="/" class="btn yellow-btn">Source</a>
          <a href="/" class="btn purple-btn">Case Study</a>
        </div>
      </div>
    </div>
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

  .about-left-text > p:first-of-type {
    font-size: 24px;
    line-height: 38px;
    font-weight: 500;
  }

  .about-left-text > h2 {
    font-size: 44px;
    line-height: 44px;
    margin-bottom: 30px;
  }

  .about-left-text > p:nth-of-type(3),
  .about-left-text > p:last-of-type {
    margin-top: 12px;
  }

  .about-left-links {
    position: relative;
    margin-top: 40px;
  }

  .about-left-links > .white-btn {
    left: 140px;
  }

  .about-left-links > .white-btn:hover {
    left: 142px;
  }

  .projects {
    padding: 40px 20px;
  }

  .projects > h2 {
    font-size: 60px;
    margin-bottom: 40px;
  }

  .projects > div {
    padding: 80px 0;
  }

  .projects > div > h3 {
    font-size: 44px;
    margin-bottom: 40px;
  }

  .project-left {
    width: 50%;
  }

  .project-links {
    position: relative;
    margin-top: 40px;
  }

  .project-links > .yellow-btn {
    left: 100px;
  }

  .project-links > .yellow-btn:hover {
    left: 102px;
  }

  .project-links > .purple-btn {
    left: 228px;
  }

  .project-links > .purple-btn:hover {
    left: 230px;
  }
  
</style>