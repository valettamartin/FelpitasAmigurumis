import cart from '../../assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="shoppingCartContainer">
            <img src={cart} alt="carrito" />
            0
        </div>
    )
}

export default CartWidget