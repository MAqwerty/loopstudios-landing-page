import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout-NAV/Layout";
import Home from "./components/Home.jsx";
import Events from "./components/Events.jsx";
import Products from "./components/Products.jsx"
import Support from "./components/Support.jsx";
import Careers from "./components/Careers.jsx";
import About from "./components/About.jsx";
import NoPage from "./components/NoPage.jsx";




function App() {
  return (
    <div className="App">
      <Layout />

      <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Careers" element={<Careers />} />
          <Route path="Events" element={<Events />} />
          <Route path="Products" element={<Products />} />
          <Route path="Support" element={<Support />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
