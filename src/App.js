import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Works from "./components/Works.jsx";
import Contacts from "./components/Contacts.jsx";

function App() {
  return (
    <div className="text-white h-screen box-border  mx-auto snap-y snap-mandatory overflow-y-auto scrollbar-none  scroll-smooth">
      <Hero />
      <About />
      <Works />
      <Contacts />
    </div>
  );
}

export default App;
