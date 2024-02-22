import { Link } from "react-router-dom"

import "bulma/css/bulma.css"

const Item = ({id, name, img, price, stock}) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-square">
                        <img src={img} alt={name} />
                    </figure>
                </div>
                <header className="card-header">
                    <div className="card-header-title">
                        {name}
                    </div>
                </header>
                <div className="card-content">
                    <div className="content">
                        Precio: ${price}
                    </div>
                    <div className="content">
                        Máximo de compra: {stock}
                    </div>
                </div>
                <footer className="card-footer">
                    <Link to={`/item/${id}`} className="card-footer-item">Ver detalle</Link>
                </footer>
            </div>
        </div>
    )
}

export default Item