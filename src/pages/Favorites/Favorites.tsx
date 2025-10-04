import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductCard from '../../components/ProductCard/ProductCard';

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  if (favorites.length === 0) {
    return <div className="container mx-auto px-4 py-8">Henüz favori ürününüz yok.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Favoriler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;