import { AvailableLotsSection } from "./components/AvailableLotsSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { TrustAndLocationSection } from "./components/TrustAndLocationSection";

function App() {
  return (
    <main>
      <HeroSection />
      <AvailableLotsSection />
      <TrustAndLocationSection />
      <ContactSection />
    </main>
  );
}

export default App;