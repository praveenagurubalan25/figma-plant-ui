import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendyPlants from "./components/TrendyPlants";
import TopSelling from "./components/TopSelling";
import CustomerReview from "./components/CustomerReview";
import O2Plants from "./components/O2Plants";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <TrendyPlants />
      <TopSelling />
      <CustomerReview/>
      <O2Plants/>
      <Footer/>
    </div>
  );
}

export default App;