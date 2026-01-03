import { HashRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import About from "./pages/About";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import "./styles/base.css";

export default function App() {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
