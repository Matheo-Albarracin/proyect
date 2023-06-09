import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderNumber, setOrderNumber] = useState(null);

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const handleCloseModal = () => {
    const modal = document.querySelector('.cart-modal');
    modal.style.display = 'none';
  };

  const handleCheckout = () => {

    const randomId = Math.floor(Math.random() * 100000);
    setOrderNumber(randomId);

    clearCart();
  };

  return (
    <div className="cart-modal cart-modal-background">
      <div className="cart-modal-content">
        <div className="cart-modal-header">
          <div className="d-flex col-12 Header">
            <h1 className="h1-checkout">Success!</h1>
            <button className="close-btn" onClick={handleCloseModal}>
              <Link to="/">X</Link>
            </button>
          </div>
          <h3 className="h3-checkout">Su compra fue realizada con éxito.</h3>
          {orderNumber && (
            <p className="h6-checkout">Número de orden: #{orderNumber}</p>
          )}
          <h6 className="h6-checkout">
            El comprobante de la operación fue enviada a la casilla de e-mail: {}
          </h6>
        </div>
        <div className="checkout-items">
          {cart.map(({ id, name, price, quantity }) => (
            <div key={id} className="cart-item">
              <div className="cart-item-info">
                <h3>
                  <i>{name}</i>
                </h3>
                <p>
                  <b>Cantidad: </b>
                  {quantity}
                </p>
                <p>
                  <b>Precio unitario: </b>$ {price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-modal-footer">
          <div className="cart-modal-total">
            <h2>
              <i>TOTAL: $ {totalPrice()},00</i>
            </h2>
          </div>
          <button onClick={handleCheckout}>Finalizar compra</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
