import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

import ScrollSteps from "./components/TanUses";
import FeaturesGrid from "./components/FeaturesGrid";
import Home from "./components/MainBanner/Home";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div>
        <ScrollToTopButton />
        <Header />
        <Home />
        <FeaturesGrid />
        <ScrollSteps />
        <Footer />
      </div>
    </>
  );
}

export default App;
