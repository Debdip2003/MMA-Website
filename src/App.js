import About from "./components/About";
import Home from "./components/Home";
import LatestEvents from "./components/LatestEvents";
import Navbar from "./components/Navbar";
import SponsorAffiliations from "./components/SponsorAffiliations";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Home />
      <About />
      <LatestEvents />
      <SponsorAffiliations />
    </div>
  );
}

export default App;
