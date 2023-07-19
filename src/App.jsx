import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './pages/Product';
import Features from './pages/Features';
import Marketplace from './pages/Marketplace';
import Company from './pages/Company';
import Trial from './pages/Trial';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/company" element={<Company />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;