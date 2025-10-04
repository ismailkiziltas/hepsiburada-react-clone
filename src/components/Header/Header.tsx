import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { login, logout } from '../../store/slice/userSlice';
import LoginModal from '../LoginModal/LoginModal';

interface HeaderProps {
  onSearch: (query: string) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, darkMode, setDarkMode }) => {
  const { totalItems } = useSelector((state: RootState) => state.cart);

  const user = useSelector((state: RootState) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState('');

  const handleLogin = (name: string) => {
    dispatch(login(name));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

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
                onChange={(e) => onSearch(e.target.value)}
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
              {user.isLoggedIn ? (
                <>
                  <span className="text-gray-700">Merhaba, {user.name}!</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Çıkış Yap
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-hepsi-orange text-white px-4 py-2 rounded-md"
                >
                  Giriş Yap
                </button>
              )}
            </div>

            <div className="flex items-center space-x-2 cursor-pointer hover:text-hepsi-orange">
              <span className="text-xl">❤️</span>
              <Link to="/favorites" className="text-gray-700 hover:text-hepsi-orange">Favoriler</Link>
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
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-md font-medium bg-gray-200 dark:bg-gray-700 dark:text-white"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
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

      {/* Giriş Modalı */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
      />
    </header>
  );
};

export default Header;