import React, {useState} from 'react'
import {Link} from "react-router-dom";
import ProductComponent from './ProductComponent'
import './CategoryComponent.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function CategoryComponent({category}) {
    const [currentProduct, setCurrentProduct] = useState(0)

    const name = category.name
    const products = category.products
    const productComponentWidth = 300
    const distanceLeft = `${currentProduct * productComponentWidth}px`

    const handleNext = () => setCurrentProduct(currentProduct => {
        if(currentProduct > - products.length + 1) return currentProduct - 1
        return currentProduct
    })
    const handlePrevious = () => setCurrentProduct(currentProduct => {
        if(currentProduct < 0) return currentProduct + 1
        return currentProduct
    })

    const LEFT_BUTTON_STYLE = {color: ''}
    const RIGHT_BUTTON_STYLE = {color: ''}
    if(!(currentProduct > - products.length + 1)) RIGHT_BUTTON_STYLE.color = '#777a834d'
    if(!(currentProduct < 0)) LEFT_BUTTON_STYLE.color = '#777a834d'

    const productComponents = products.map(product => {
        return (
            <ProductComponent key={product._id} product={product} productComponentWidth={productComponentWidth} />
        )
    })

    return (
        <div className='category-component'>
            <h2 className='category-title'>
                <Link to='/'>
                    {name}
                </Link>
            </h2>
            <div className='category-component-list-container'>
                <button onClick={handlePrevious} className='left-button'>
                    <FontAwesomeIcon icon={faChevronLeft} className='fa-lg' style={LEFT_BUTTON_STYLE} />
                </button>
                <div className='category-component-relative-ref'>
                    <ul className='category-component-list'  style={{left: distanceLeft}}>
                        {productComponents}
                    </ul>
                </div>
                <button onClick={handleNext} className='right-button'>
                    <FontAwesomeIcon icon={faChevronRight} className='fa-lg' style={RIGHT_BUTTON_STYLE} />
                </button>
            </div>
        </div>
    )
}
