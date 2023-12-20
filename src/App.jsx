import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Benefits } from "./components/benefits";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import Footer from "./components/country/Footer/Footer";
import Country from "./components/country/CountApp";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// ... (ваш импорт)

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />

      <Routes>
        <Route
          exact
          path="/"
          element={<Header data={landingPageData.Header} />}
        />
        <Route path="/about" element={<About data={landingPageData.About} />} />
        <Route
          path="/services"
          element={<Services data={landingPageData.Services} />}
        />
        <Route
          path="/benefits"
          element={<Benefits data={landingPageData.Benefits} />}
        />
        <Route
          path="/features"
          element={<Features data={landingPageData.Features} />}
        />
        <Route path="/team" element={<Team data={landingPageData.Team} />} />
        <Route
          path="/testimonials"
          element={<Testimonials data={landingPageData.Testimonials} />}
        />
        <Route
          path="/contact"
          element={<Contact data={landingPageData.Contact} />}
        />
        <Route
          path="/gallery"
          element={<Gallery data={landingPageData.Gallery} />}
        />
        <Route path="/country" element={<Country />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
