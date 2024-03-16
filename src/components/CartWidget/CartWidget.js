import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalQuantity = cart.reduce((total, { quantity }) => total + quantity, 0);

    return (
        <Link to='/cart'>
            <MdOutlineShoppingCart />
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </Link>
    )
}

export default CartWidget