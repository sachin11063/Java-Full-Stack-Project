import React, { useState } from "react";
import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';



function App() {
  const [section, setSection] = useState("home");

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Carbon Footprint Calculator</h1>
        <ul className="nav-links">
          <li onClick={() => setSection("home")}>Home</li>
          <li onClick={() => setSection("about")}>About</li>
          <li onClick={() => setSection("calculator")}>Calculator</li>
          <li onClick={() => setSection("contact")}>Contact</li>
        </ul>
      </nav>

      <main className="content">
        {section === "home" && <Home />}
        {section === "about" && <About />}
        {section === "calculator" && <Calculator />}
        {section === "contact" && <Contact />}
      </main>
    </div>
  );
}





export default App;
