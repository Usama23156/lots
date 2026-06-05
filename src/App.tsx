import { AvailableLotsSection } from "./components/AvailableLotsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { TrustAndLocationSection } from "./components/TrustAndLocationSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AvailableLotsSection />
        <TrustAndLocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;