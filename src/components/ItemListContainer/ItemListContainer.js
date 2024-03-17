import "bulma/css/bulma.css"
import { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../config/firebase"

import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products");
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <div className="has_margin_top">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer