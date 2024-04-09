import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/hero/Hero";
import "./app.scss";
import Parallax from "./Components/Parallax/Parallax";
import Contact from "./Components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>
   
    <section id="Projects"><Parallax/></section>
    <section id="Contact"><Contact/></section>

  </div>;
};

export default App;
