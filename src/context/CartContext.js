import { createContext, useState, useEffect } from 'react';
import "./CartContext.css"

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isReadyToCheckout, setIsReadyToCheckout] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      alert('El Producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([])
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  useEffect(() => {
    const isValid =
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.phone !== '' &&
      formData.email !== '' &&
      formData.email === formData.confirmEmail;

    setIsReadyToCheckout(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isReadyToCheckout }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;