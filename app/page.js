import About from "./component/About";
import Banner from "./component/Banner";
import Projects from "./component/Projects";
import Services from "./component/Services";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Scroll from "./component/Scroll";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Skills/>
      <About/>
      <Services/>
      <Projects/>
     <Contact/>
     <Scroll/>
    </main>
  );
}
