import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./navbar";
import Work from "./Components/work/Work";
import ContactPage from "./Components/ContactPage";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import React from "react";
import Contact from "./Components/contact/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          {/* <Route index="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
