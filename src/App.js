import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import MovieDetail from "./pages/MovieDetail.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="contentBody">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<MovieDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
