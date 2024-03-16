import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div>
                <h1>El carrito está vacío</h1>
                <Link to="/">Productos</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.map(({ item, quantity }, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <img src={item.img} alt={item.name} />
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {quantity}</p>
                    <button onClick={() => { removeItem(item.id); }}>Eliminar</button>
                    <hr />
                </div>
            ))}
            <h3>Total: ${calculateTotal(cart)}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/checkout">Comprar</Link>
        </div>
    );
};

const calculateTotal = (cart) => {
    return cart.reduce((total, { item, quantity }) => total + item.price * quantity, 0);
};

export default Cart;