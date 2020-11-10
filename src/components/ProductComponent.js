import React from 'react'
import {Link} from 'react-router-dom'
import './ProductComponent.css'

export default function ProductComponent({product, productComponentWidth}) {
    const name = product.name
    const imageUrl = product.image_url
    const ingredients = product.ingredients
    const price = product.prices[0].value

    return (
        <li style={{width: `${productComponentWidth}px`}}>
            <div className='product-component'>
                <div className='product-component-image-container'>
                    <img src={process.env.REACT_APP_API_URL + imageUrl} alt={name} />
                </div>
                <div className='product-component-info'>
                    <Link className='product-component-name' to='/'>
                        {name}
                    </Link>
                    <p className='product-component-ingredients'>
                        {ingredients}
                    </p>
                    <span className='product-component-price'>
                        ${price.toFixed(2)}
                    </span>
                    <br />
                    <button className='product-component-add-button'>
                        Agregar a carrito
                    </button>
                </div>
            </div>
        </li>
    )
}
