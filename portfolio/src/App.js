import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Pages/Contact"
import Home from "./components/Pages/Home"
import Projects from "./components/Pages/Projects"
import Header from "./components/Header";

function App() {
  return (
    //   <p>This is my portfolio page</p>
    // );

    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
