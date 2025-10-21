import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="mx-auto font-asimovian text-white overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
