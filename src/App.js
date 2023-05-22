import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import Newsletter from "./Components/Newsletter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
