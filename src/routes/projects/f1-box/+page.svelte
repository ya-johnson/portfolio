<script>
  import F1BoxHero from '$lib/svg/f1-box-hero.svelte'
  import Bar from '$lib/components/bar.svelte'
  import Syntax from '$lib/components/syntax.svelte'
  import Construction from '$lib/svg/construction.svelte'
</script>

<main>
  <section class="case-hero">
    <div class="container f-jsb">
      <div class="case-hero-left">
        <h1 class="delay-1200 hide">F1 box</h1>
        <p class="delay-1400 hide">
          As a Formula 1 fan i grow to understand the importance of the sports data,
          and after a disappointing search for a platform, I decided to create one.
        </p>
        <p class="delay-1400 hide">
          F1 box is a hub and a platform for analysing Formula 1 data.
          It goes back from the first F1 race in 1950 up to the most current one.
          Features an in depth Race, Drivers, Constructors analytics and information,
          as well as News and Press gathered from popular publishers.
        </p>
        <div class="proj-stack delay-1400 hide">
          <p class="stack-btn">Next-Js</p>
          <p class="stack-btn">Zustand</p>
          <p class="stack-btn">SWR</p>
          <a href="https://ergast.com/mrd/" class="stack-btn" target="_blank" rel="noreferrer">Ergrast F1 API</a>
          <p class="stack-btn">Cheerio</p>
          <p class="stack-btn">Tailwind</p>
        </div>
        <div class="proj-links delay-1600 hide">
          <a href="/" class="btn bg-white">Live</a>
          <a href="/" class="btn bg-yellow">Source</a>
        </div>
      </div>
      <div class="case-hero-right">
        <F1BoxHero />
      </div>
    </div>
  </section>

  <section class="case-demo">
    <div class="container f-jsb">
      <div class="case-demo-left">
        <h3>App Demo</h3>
        <ul>
          Pages
          <li>Home</li>
          <li>Race</li>
          <li>Standings</li>
          <li>Drivers</li>
          <li>Constructors</li>
          <li>Compare</li>
          <li>Race Simulator</li>
        </ul>
        <ul>
          Features
          <li>Theme toggle</li>
        </ul>
      </div>
      <div class="case-demo-right">
        <!-- <img src={F1boxHome} alt=""> -->
      </div>
    </div>
  </section>

  <Bar text='design • design • design • design •' color='white' />
  <section>
    <div class="container">
      <div class="case-text">
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
      </div>
    </div>
  </section>

  <Bar text='development ◆ development ◆' color='yellow'/>
  <section class="container py-section f-jc">
    <Construction />
  </section>
  <!-- <section>
    <div class="container">
      <div class="case-text">
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
        <Syntax language='jsx' filepath='/server/server.js' 
                code={`import { useAuthModal, useWindow } from '../hooks'
import { Login, Register } from './index'
import { AiOutlineCloseCircle } from 'react-icons/ai'


const AuthModal = () => {

  const { authType, toggleAuthModal } = useAuthModal()
  const { width } = useWindow()

  return (
    <div className="auth auth-modal-close" 
         onClick={e => toggleAuthModal(e)}>
      <div className=${'{`auth-modal ${width >= 500 ? `w-[450px]` : `w-[calc(${width}-16px)]`}`}'}>
        <div className="auth-close">
          <AiOutlineCloseCircle className="auth-close-icon" />
        </div>
        {authType === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  )
}


export default AuthModal`}/>
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
        <Syntax language='javascript' filepath='/f1box/src/services/newsServices.js' 
                code={`
  const getMotorsportNews = async () => {
    const data = await response.data

    const page = cheerio.load(data)
    const articlesData = page('.ms-item--art, .ms-grid-hor-items-1-2-3-4-5').map((i, article) => {
      return {
        header: page(article).find('.ms-item_link--text').text(),
        image: page(article).find('.ms-item_img--3_2').attr('src'),
        url: page(article).find('a').attr('href')
      }
    }).get()

    const articles = articlesData.filter(article => article.image && article.url).slice(1,13)
    return articles
  }`}/>
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Auctor augue mauris augue neque gravida in fermentum et.
          Quam vulputate dignissim suspendisse in est ante. Magna ac placerat
          vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc
          mattis enim ut tellus elementum. Leo in vitae turpis massa sed elementum
          tempus egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc.
          Risus quis varius quam quisque id. Commodo nulla facilisi nullam vehicula
          ipsum a arcu. Dictum non consectetur a erat nam. Donec enim diam vulputate
          ut pharetra sit. Cras adipiscing enim eu turpis. At risus viverra adipiscing at.
          At tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas sed enim ut.
          Nec ultrices dui sapien eget mi proin. Leo duis ut diam quam nulla.
        </p>
      </div>
    </div>
  </section> -->

</main>
