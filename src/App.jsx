import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/Homepage";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import BlogPage from "./Component/Blog";
import PaintingWebsite from "./Component/Home";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/" element={<PaintingWebsite />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
