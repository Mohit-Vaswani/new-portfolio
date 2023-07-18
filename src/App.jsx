import About from "./components/About";
import About2 from "./components/About2";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Proof from "./components/Proof";
import Stars from "./components/Stars";
import Work from "./components/Work";
import "./index.css"

function App() {

  return (
    <section className="overflow-x-hidden w-full">
      <CustomCursor/>
      <Stars/>
      <Hero/>
      <About/>
      <Benefits/>
      <About2/>
      <Proof/>
      <Work/>
      <Contact/>
    </section>
  )
}

export default App
