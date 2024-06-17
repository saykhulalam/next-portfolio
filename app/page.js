import About from "./component/About";
import Banner from "./component/Banner";
import CustomerFeedback from "./component/CustomerFeedback";
import Projects from "./component/Projects";
import Services from "./component/Services";
import Skills from "./component/Skills";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Skills/>
      <About/>
      <Services/>
      <Projects/>
      <CustomerFeedback/>
    </main>
  );
}
