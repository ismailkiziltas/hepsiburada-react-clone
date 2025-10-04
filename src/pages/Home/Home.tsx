import React, { useState } from 'react';
import productsData from '../../data/product.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Product } from '../../types';

const products: Product[] = productsData as Product[];

interface HomeProps {
  searchQuery: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map((product) => product.category)));

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Kategori Butonları */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-md font-medium ${!selectedCategory ? 'bg-hepsi-orange text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Tümü
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md font-medium ${selectedCategory === category ? 'bg-hepsi-orange text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Ürün Listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;