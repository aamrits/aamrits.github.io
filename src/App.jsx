import { HashRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import About from "./pages/About";
import CV from "./pages/CV";
import "./styles/base.css";

export default function App() {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
