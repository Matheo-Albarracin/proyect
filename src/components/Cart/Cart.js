import { useContext } from "react";
import "./Cart.css"
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem"
import Message from "./Message"

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);
  
    return (
      <div className="CartItemFooter">
        {cart.length === 0 ? (
          <Message />
        ) : (
          <>
            {cart.map((p) => (
              <CartItem key={p.id} {...p} />
            ))}
            <div className="BtnClearCart">
              <button onClick={() => clearCart()} className="Button">
                Limpiar el carrito
              </button>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Cart;