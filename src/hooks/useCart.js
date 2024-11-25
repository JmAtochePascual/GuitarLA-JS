import { useState, useEffect } from 'react';

const useCart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'));
  const MAX_QUANTITY = 5;
  const MIN_QUANTITY = 1;
  const INCREASE = 1;

  // Save the cart in the local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Increase the quantity of a guitar in the cart
  const increaseQuantity = guitar => {
    if (guitar.quantity === MAX_QUANTITY) return;

    const newCart = cart.map(item => item.id === guitar.id ? { ...item, quantity: item.quantity + INCREASE } : item);
    setCart(newCart);
  }

  // Decrease the quantity of a guitar in the cart
  const decreaseQuantity = guitar => {
    if (guitar.quantity === MIN_QUANTITY) {
      removeFromCart(guitar);
      return;
    }

    const newCart = cart.map(item => item.id === guitar.id ? { ...item, quantity: item.quantity - INCREASE } : item);
    setCart(newCart);
  }

  // Remove a guitar from the cart
  const removeFromCart = guitar => {
    const newCart = cart.filter(item => item.id !== guitar.id);
    setCart(newCart);
  }

  // Add a guitar to the cart
  const addToCart = guitar => {
    setCart([...cart, { ...guitar, quantity: INCREASE }]);
  }

  // Reset the cart
  const resetCart = () => setCart([]);

  // Add a guitar to the cart or increase its quantity
  const handleCart = guitar => {
    // Check if the guitar is already in the cart
    const alreadyInCart = cart.some(item => item.id === guitar.id);

    alreadyInCart
      ? increaseQuantity(guitar)
      : addToCart(guitar);
  }

  return {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    resetCart,
    handleCart
  };
};

export default useCart;
