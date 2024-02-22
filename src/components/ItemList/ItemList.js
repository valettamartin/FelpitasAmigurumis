import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className="container">
            <div className="columns is-multiline">
                {products.map(prod => (
                    <div key={prod.id} className="column is-4">
                        <Item {...prod} />
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default ItemList