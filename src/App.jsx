import "./App.css";
import Brands from "./components/Brands/Brands";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Trial from "./components/Trial/Trial";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Brands />
      <Services />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
