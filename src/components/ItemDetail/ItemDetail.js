import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "bulma/css/bulma.css"
import "./ItemDetail.css"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    
        const item = {
            id, name, price, img
        }
    
        addItem(item, quantity)
    }

    return (
        <div className="container card detail_container">
            <div className="columns">
                <div className="column is-half description_container">
                    <article className="fill parent">
                        <header className="div1">
                            <h2 className="is-size-1">{name}</h2>
                        </header>
                        <section className="div2">
                            <p>Categoría: {category}</p>
                            <p>Descripción: {description}</p>
                            <p>Precio: ${price}</p>
                        </section>
                        <footer className="div3">
                            {
                                quantityAdded > 0 ? (
                                    <button className="button is-primary bottom_right">
                                        <Link to='/cart'>Finalizar Compra</Link>
                                    </button>
                                ) : (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                                )
                            }
                        </footer>
                    </article>
                </div>
                <div className="column is-half image_container">
                    <picture>
                        <img src={img} alt={name} />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail