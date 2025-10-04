import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Product } from '../../types';
import productsData from '../../data/product.json';
import { addToCart } from '../../store/slice/cartSlice';

const products: Product[] = productsData as Product[];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const product: Product | undefined = products.find(
    (item) => item.id === parseInt(id || '', 10)
  );

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Ürün bulunamadı!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
          <p className="text-lg font-bold text-hepsi-orange mb-4">
            {new Intl.NumberFormat('tr-TR', {
              style: 'currency',
              currency: 'TRY',
            }).format(product.price)}
          </p>
          <p className="text-gray-700 mb-6">{product.description || 'Ürün açıklaması mevcut değil.'}</p>
          <button
            onClick={handleAddToCart}
            className="bg-hepsi-orange text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition-colors"
            disabled={!product.inStock}
          >
            {product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;