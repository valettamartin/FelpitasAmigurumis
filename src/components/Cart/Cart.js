import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./Cart.css"
import "bulma/css/bulma.css"

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container is-widescreen card main_cart_container">
                <h1 className="title is-2 has-text-centered">El carrito está vacío</h1>
                <Link to="/" className="button is-primary hast-text-centered is-size-5 columns is-centered">Ver productos</Link>
            </div>
        );
    }

    return (
        <div className="container is-widescreen card main_cart_container">
            <h1 className="title is-2 has-text-centered">Carrito de Compras</h1>
            {cart.map(({ item, quantity }, index) => (
                <div key={index} className="card cart_container">
                    <h3 className="item_element_one">{item.name}</h3>
                    <img src={item.img} alt={item.name} className="item_element_two"/>
                    <div className="item_element_three card">
                        <p>Precio: ${item.price}</p>
                        <p>Cantidad: {quantity}</p>
                    </div>
                    <button onClick={() => { removeItem(item.id); }} className="button is-danger item_element_four">X</button>
                </div>
            ))}
            <div className="checkout_button_container card">
                <h3 className="has_margin_bottom is-size-4">Total: ${calculateTotal(cart)}</h3>
                <button className="button is-warning has_margin_right" onClick={() => clearCart()}>Limpiar Carrito</button>
                <Link to="/checkout" className="button is-primary">Comprar</Link>
            </div>
        </div>
    );
};

const calculateTotal = (cart) => {
    return cart.reduce((total, { item, quantity }) => total + item.price * quantity, 0);
};

export default Cart;