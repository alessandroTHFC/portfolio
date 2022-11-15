import { useRef } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";
import useScrollSnap from "react-use-scroll-snap";

function App() {
  //ref={scrollRef}
  //const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 10 });
  return (
    <div>
      <div className="container">
        <Header />
        <Banner />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
