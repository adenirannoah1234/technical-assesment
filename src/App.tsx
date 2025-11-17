import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopWithConfidence from './components/shop-with-confidence';
import TakePaySection from './components/take-pay-section';
import ShopWithCredpalSection from './components/shop-with-credpal-section';
import CredpalSavings from './components/credpal-savings';
import GrowFasterSection from './components/grow-faster-section';
import ShopLikePro from './components/shop-like-pro';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ShopWithConfidence />
      <TakePaySection />
      <ShopWithCredpalSection />
      <CredpalSavings />
      <ShopLikePro />
      <GrowFasterSection />

      <Footer />
    </div>
  );
}

export default App;
