import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./pages/home";
import Footer from "./shared/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
