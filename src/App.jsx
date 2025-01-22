
import './App.css'
import AboutPage from './component/about'
import Contact from './component/contact'
import Experience from './component/expirience'
import Footer from './component/footer'
import Hero from './component/hero'
import Header from './component/navber'
import Projects from './component/project'
import Skills from './component/skill'

function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      
      {/* <About/> */}
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default App
