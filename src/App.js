import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav
          style={{
            marginTop: "15px",
            borderBottom: "solid 1px",
            paddingBottom: "1rem",

          }}
        >
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="about" style={{ marginRight: "15px" }}>About</Link>
          <Link to="contact" style={{ marginRight: "15px" }}>Contact</Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact/> }/>
          </Routes>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
