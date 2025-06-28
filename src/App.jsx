import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
