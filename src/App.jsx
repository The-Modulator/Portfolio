import Navbar from "./Components/Navbar/Navbar";
import "./app.scss";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      </section>
    <section id="Character"><a href="">Character</a></section>
    <section id="Projects">Projects</section>
    <section id="Contact">Contact</section>

  </div>;
};

export default App;
