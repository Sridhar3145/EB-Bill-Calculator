import "./App.css";
import Header from "./header-footer/Header.jsx";
import Footer from "./header-footer/Footer.jsx";
import Home from "./Main/Home.jsx";
import Calculator from "./Main/Calculator.jsx";
import Chart from "./Main/Charts.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="chart" element={<Chart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
