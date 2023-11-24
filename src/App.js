import "./App.css";
import Header from "./components/Header";
import LightTherapy from "./components/LightTherapy";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Infrared from "./components/colorMenu/Infrared";
import RedLight from "./components/colorMenu/RedLight";
import AmberLight from "./components/colorMenu/AmberLight";
import YellowLight from "./components/colorMenu/YellowLight";
import GreenLight from "./components/colorMenu/GreenLight";
import ColorTherapy from "./components/ColorTherapy";
import AddToCart from "./components/AddToCart";

const Data = [
  {
    img: (
      <span>
        <i class="fa-solid fa-hippo"></i>
      </span>
    ),
    name: "Hassan SArdar",
    post: "Designer",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used ",
  },
  {
    img: (
      <span>
        <i class="fa-solid fa-film"></i>
      </span>
    ),
    name: "Saeed",
    post: "Designer",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used ",
  },
  {
    img: (
      <span>
        <i class="fa-solid fa-hippo"></i>
      </span>
    ),
    name: "Hassan SArdar",
    post: "Designer",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used ",
  },
  {
    img: (
      <span>
        <i class="fa-solid fa-film"></i>
      </span>
    ),
    name: "Saeed",
    post: "Designer",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used ",
  },
];

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/Cart" element={<AddToCart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/therapy" element={<LightTherapy />} />
          <Route exact path="/colors" element={<ColorTherapy />}>
            <Route exact path="/colors" element={<Infrared />} />
            <Route exact path="/colors/red" element={<RedLight />} />
            <Route exact path="/colors/amber" element={<AmberLight />} />
            <Route exact path="/colors/yellow" element={<YellowLight />} />
            <Route exact path="/colors/green" element={<GreenLight />} />
          </Route>
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
