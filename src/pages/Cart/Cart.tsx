import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, updateQuantity } from '../../store/slice/cartSlice';

const Cart: React.FC = () => {
  const { items, totalAmount, totalItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sepetiniz Boş
          </h2>
          <p className="text-gray-600 mb-8">
            Alışverişe başlamak için ürünleri sepetinize ekleyin
          </p>
          <a
            href="/"
            className="bg-hepsi-orange text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors"
          >
            Alışverişe Başla
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Sepetim ({totalItems} ürün)
          </h1>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-contain"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.product.brand}</p>
                    <p className="text-lg font-bold text-hepsi-orange mt-2">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.product.id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-80">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Sipariş Özeti
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Ürünler ({totalItems})</span>
                <span>{formatPrice(totalAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Kargo</span>
                <span className="text-green-600">Ücretsiz</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Toplam</span>
                <span className="text-hepsi-orange">{formatPrice(totalAmount)}</span>
              </div>
            </div>

            <button className="w-full bg-hepsi-orange text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors">
              Sepeti Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;