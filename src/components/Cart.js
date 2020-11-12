import React, {useEffect} from 'react'
import {useCart} from '../context/CartContext'
import Detail from './Detail'
import './Cart.css'

export default function Cart({setNewInCart}) {
    const cart = useCart().cart
    const setCart = useCart().setCart

    useEffect(() => {
        setNewInCart(false)
    }, [setNewInCart])

    function handlePurchase() {
        const details = cart.map(cartElement => {
            return {
                quantity: cartElement.quantity,
                priceId: cartElement.priceId,
                productId: cartElement.product._id
            }
        })
        console.log(details)
        setCart([])
    }

    let cartTotal = 0
    const details = cart.map((cartElement) => {
        let product = cartElement.product

        const price = product.prices.find((price) => price._id === cartElement.priceId)
        const priceName = price.description
        const priceValue = price.value
        const quantity = cartElement.quantity
        const detailTotal = Math.round(priceValue * quantity * 100) / 100
        cartTotal += detailTotal

        const key = product._id.toString() + ',' + price._id.toString()
        return (
            <Detail key={key} priceName={priceName} product={product}
                priceValue={priceValue} quantity={quantity} 
                detailTotal={detailTotal} cartElement={cartElement} />
        )
    })

    return (
        <>
            <div className='cart'>
                <h2 className='cart-total-header'>Total: ${cartTotal.toFixed(2)}</h2>
                <ul className='cart-list'>
                    {details}
                </ul>
            </div>
            <div className='purchase-button-container'>
                <button onClick={handlePurchase}>Finalizar Compra</button>
            </div>
        </>
    )
}
