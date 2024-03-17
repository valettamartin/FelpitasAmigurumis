import { useState } from "react";
import "./ItemCount.css"
import "bulma/css/bulma.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="parent_footer">
            <button onClick={increment} className="selector_plus button is-primary div1_footer">+</button>
            <div className="selector_amount div2_footer card">{quantity}</div>
            <button onClick={decrement} className="selector_minus button is-primary div3_footer">-</button>
            <div className="div4_footer">
                <button onClick={() => onAdd(quantity)} disabled={!stock} className="button is-primary">Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount