
import './App.css';
//import './assets/font-awesome/css/font-awesome.min.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
/*import Contact from "./pages/Contact";*/


function App() {
  return (
     //<Route path="/" element={<Home />} />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        {/*<Route path="/contact" element={<Contact />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
