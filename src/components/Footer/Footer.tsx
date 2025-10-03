import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hepsi-dark text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-hepsi-orange mb-4">
              Hepsiburada
            </h3>
            <p className="text-gray-300 mb-4">
              Türkiye'nin en büyük online alışveriş sitesi. 
              Milyonlarca ürün, binlerce marka.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl cursor-pointer hover:text-hepsi-orange">📘</span>
              <span className="text-2xl cursor-pointer hover:text-hepsi-orange">📷</span>
              <span className="text-2xl cursor-pointer hover:text-hepsi-orange">🐦</span>
              <span className="text-2xl cursor-pointer hover:text-hepsi-orange">📺</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Müşteri Hizmetleri</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="#" className="hover:text-white">İletişim</Link></li>
              <li><Link to="#" className="hover:text-white">Sıkça Sorulan Sorular</Link></li>
              <li><Link to="#" className="hover:text-white">Canlı Yardım</Link></li>
              <li><Link to="#" className="hover:text-white">Nasıl İade Edebilirim?</Link></li>
              <li><Link to="#" className="hover:text-white">İşlem Rehberi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hepsiburada</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="#" className="hover:text-white">Hakkımızda</Link></li>
              <li><Link to="#" className="hover:text-white">Kariyer</Link></li>
              <li><Link to="#" className="hover:text-white">Basın Odası</Link></li>
              <li><Link to="#" className="hover:text-white">Sürdürülebilirlik</Link></li>
              <li><Link to="#" className="hover:text-white">Yatırımcı İlişkileri</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Mobil Uygulamalar</h4>
            <div className="space-y-3">
              <div className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="text-xs text-gray-300">App Store'dan indirin</div>
                    <div className="font-semibold">iOS App</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <div className="text-xs text-gray-300">Google Play'den indirin</div>
                    <div className="font-semibold">Android App</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Hepsiburada. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <Link to="#" className="hover:text-white">Gizlilik Politikası</Link>
              <Link to="#" className="hover:text-white">Kullanım Koşulları</Link>
              <Link to="#" className="hover:text-white">Çerez Politikası</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;