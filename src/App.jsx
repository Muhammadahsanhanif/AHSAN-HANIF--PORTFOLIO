import "./App.css";
import AboutPage from "./component/about";
import Contact from "./component/contact";
import Experience from "./component/expirience";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Header from "./component/navber";
import ParticlesComponent from "./component/partical";
import Projects from "./component/project";
import Skills from "./component/skill";

function App() {
  return (
    <div className="relative">
      {/* Particles Background */}
      <ParticlesComponent id="tsparticles" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <AboutPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
