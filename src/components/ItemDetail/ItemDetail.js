import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <div className="container">
            <div className="columns">
                <div className="column is-half">
                    <article>
                        <header>
                            <h2 className="is-size-1">{name}</h2>
                        </header>
                        <section>
                            <p>Categoría: {category}</p>
                            <p>Descripción: {description}</p>
                            <p>Precio: ${price}</p>
                        </section>
                        <footer>
                            {
                                quantityAdded > 0 ? (
                                    <Link to='/cart'>Finalizar Compra</Link>
                                ) : (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                                )
                            }
                        </footer>
                    </article>
                </div>
                <div className="column is-half">
                    <picture>
                        <img src={img} alt={name} />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail