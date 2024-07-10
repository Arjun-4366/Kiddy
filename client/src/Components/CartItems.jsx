import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 200, quantity: 2 },
    { id: 3, name: 'Product 3', price: 150, quantity: 1 },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Function to handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discountAmount = subtotal * (discount / 100);
    return subtotal - discountAmount;
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Proceeding with checkout!');
  };

  // Function to handle applying promo code
  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      setDiscount(10);
    } else if (promoCode === 'DISCOUNT20') {
      setDiscount(20);
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  return (
    <div className="container mx-auto my-8 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      <div className="bg-gray-500 shadow-md rounded-lg">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4 px-6">
            <div>
              <p className="font-semibold text-lg text-white">{item.name}</p>
              <p className="text-white">Price: Rs {item.price}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="text-white hover:text-gray-900 px-3 py-1 rounded-md border border-gray-300"
              >
                -
              </button>
              <span className="px-3 text-white">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="text-white hover:text-gray-900 px-3 py-1 rounded-md border border-gray-300"
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="px-3 py-1 mr-4 rounded-md border border-gray-300 focus:outline-none"
            />
            <button
              onClick={applyPromoCode}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-lg"
            >
              Apply
            </button>
          </div>
          <p className="font-semibold text-lg text-white">Total: Rs {calculateTotalPrice()}</p>
        </div>
        <div className="flex justify-end py-4 px-6">
          <button
            onClick={handleCheckout}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;