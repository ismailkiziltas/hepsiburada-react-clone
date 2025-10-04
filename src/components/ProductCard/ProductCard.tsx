import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';
import { Product } from '../../types';
import { Link } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../../store/slice/favoritesSlice';
import { RootState } from '../../store/store';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative">
        <button
          onClick={handleFavoriteToggle}
          className={`absolute top-2 right-2 p-2 rounded-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        {imageError ? (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📦</div>
              <p className="text-gray-500">Görsel Yüklenemedi</p>
            </div>
          </div>
        ) : (
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain p-4"
            />
          </Link>
        )}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            %{product.discount} İndirim
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Stokta Yok</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>

        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 h-12">
          <Link to={`/product/${product.id}`} className="hover:text-hepsi-orange">
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviewCount})
          </span>
        </div>

        <div className="mb-3">
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </p>
          )}
          <p className="text-lg font-bold text-hepsi-orange">
            {new Intl.NumberFormat('tr-TR', {
              style: 'currency',
              currency: 'TRY',
            }).format(product.price)}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${product.inStock
            ? 'bg-hepsi-orange text-white hover:bg-orange-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          {product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;