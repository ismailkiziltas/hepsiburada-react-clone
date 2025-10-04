import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('darkMode') === 'true'
  );

  const [searchQuery, setSearchQuery] = useState<string>(''); // Arama sorgusu için state

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onSearch={(query) => setSearchQuery(query)} // Arama işlevini Header'a bağlama
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} /> {/* Arama sorgusunu Home'a aktar */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;