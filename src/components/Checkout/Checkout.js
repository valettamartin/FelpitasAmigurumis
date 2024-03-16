import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, documentId, getDocs, addDoc, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../config/firebase"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: 0,
                date: Timestamp.fromDate(new Date())
            }

            cart.forEach(el => {
                objOrder.total += el.quantity * el.item.price
            })

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = []

            cart.forEach(el => {
                ids.push(el.item.id)
            })

            const proudctsRef = collection(db, 'products')
            
            const productsAddedFromFirestore = await getDocs(query(proudctsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.item.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                console.log(orderRef)
                console.log(objOrder)
                const OrderAdded = await addDoc(orderRef, objOrder)

                setOrderId(OrderAdded.id)
                clearCart()
            } else {
                console.error('hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Estamos generando su orden...</h1>
    }

    if (orderId) {
        return <h1>Puede identificar su orden con el siguiente código: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout