
import { FaGraduationCap } from "react-icons/fa";
import Hero from './Hero';
import MakeWork from "./MakeWork";
import Space from "./Space";
import Powering from "./Powering";
import Nav from "./Nav.jsx"
import Footer from "./Footer";

const cards = [
  { icon: <FaGraduationCap />, title: "EDUCATION" },
]

function App() {

  return (
    <div>
      <div>
        
        <Nav />
        <Hero />
        <MakeWork />
        <Powering />
        <Footer />

      </div>
    </div>
    
    
    
  );
}

export default App

// <div className="font-open-sans text-zoom-blue">
// Welcome to zoom webpage
// </div>
