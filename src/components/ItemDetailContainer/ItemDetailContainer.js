import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching product: ", error);
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer