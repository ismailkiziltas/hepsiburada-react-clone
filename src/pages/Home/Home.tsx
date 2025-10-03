import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Product } from '../../types';
import productsData from '../../data/product.json';

const Home: React.FC = () => {
  const products: Product[] = productsData as Product[];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-hepsi-orange to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Hepsiburada'da Her Şey Var!
          </h1>
          <p className="text-xl">
            Milyonlarca ürün, binlerce marka, hızlı teslimat
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Kategoriler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {['Elektronik', 'Moda', 'Ev & Yaşam', 'Spor', 'Kitap', 'Oyuncak'].map((category) => (
            <div
              key={category}
              className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">📱</div>
              <p className="font-medium text-gray-700">{category}</p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Öne Çıkan Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Özel Kampanya!</h3>
          <p className="text-lg">Seçili ürünlerde %50'ye varan indirimler</p>
          <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Kampanyayı Gör
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;