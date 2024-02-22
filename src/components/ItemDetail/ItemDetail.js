import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
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