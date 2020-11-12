import React from 'react'
import {useCart} from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Detail.css'

export default function Detail({product, priceName, priceValue, quantity, detailTotal, cartElement}) {

    const addToCart = useCart().addToCart
    const quitFromCart = useCart().quitFromCart

    function buttonMinusClick() {
        if(cartElement.quantity > 1) addToCart(cartElement.product, cartElement.priceId, -1)
    }

    function buttonPlusClick() {
        addToCart(cartElement.product, cartElement.priceId, 1)
    }

    function buttonQuitClick() {
        quitFromCart(cartElement.product, cartElement.priceId)
    }

    return(
        <li className="detail">
            <div className="detail-image">
                <img src={process.env.REACT_APP_API_URL + product.image_url} alt={product.name} />
            </div>
            <h4 className="detail-product-name">{product.name}</h4>
            <div className="detail-product-price">
                <span className="detail-price-name">{`${priceName}:`}</span>
                <span>{`$${priceValue}`}</span>
            </div>
            <div className='detail-change-quantity-container'>
                <div className="product-component-change-quantity-group">
                    <button className="" onClick={buttonMinusClick}>-</button>
                    <input type="number" value={quantity} disabled/>
                    <button className="" onClick={buttonPlusClick}>+</button>
                </div>
            </div>
            <div className="detail-price-total">
                {`$${detailTotal.toFixed(2)}`}
            </div>
            <button onClick={buttonQuitClick} className='detail-quit-button'>
                <FontAwesomeIcon icon={faTimes} className="fa-lg" />
            </button>
        </li>
    )

}