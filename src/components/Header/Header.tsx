import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';

const Header: React.FC = () => {
  const { totalItems } = useSelector((state: RootState) => state.cart);

  return (
    <header className="bg-white shadow-md">
      <div className="bg-hepsi-orange text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <span>Ücretsiz kargo fırsatını kaçırma!</span>
            <div className="flex space-x-4">
              <span>Satıcı Ol</span>
              <span>Müşteri Hizmetleri</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-hepsi-orange">
              Hepsiburada
            </h1>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Ne aramıştınız?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-hepsi-orange"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                🔍
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-hepsi-orange">
              <span className="text-xl">👤</span>
              <span className="hidden md:block">Giriş Yap</span>
            </div>

            <div className="flex items-center space-x-2 cursor-pointer hover:text-hepsi-orange">
              <span className="text-xl">❤️</span>
              <span className="hidden md:block">Favoriler</span>
            </div>

            <Link to="/cart" className="flex items-center space-x-2 cursor-pointer hover:text-hepsi-orange relative">
              <div className="relative">
                <span className="text-xl">🛒</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden md:block">Sepetim</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex space-x-8">
            <a href="#" className="text-hepsi-dark hover:text-hepsi-orange font-medium">
              Kategoriler
            </a>
            <a href="#" className="text-hepsi-dark hover:text-hepsi-orange">
              Süpermarket
            </a>
            <a href="#" className="text-hepsi-dark hover:text-hepsi-orange">
              Kampanyalar
            </a>
            <a href="#" className="text-hepsi-dark hover:text-hepsi-orange">
              Çok Satanlar
            </a>
            <a href="#" className="text-hepsi-dark hover:text-hepsi-orange">
              Flaş Ürünler
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;