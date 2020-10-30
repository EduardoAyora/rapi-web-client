import React, {useState} from 'react'
import {Link} from "react-router-dom";
import ProductComponent from './ProductComponent'
import './CategoryComponent.css'

export default function CategoryComponent({category}) {
    const [currentProduct, setCurrentProduct] = useState(0)

    const name = category.name
    const products = category.products
    const productComponentWidth = 300
    const distanceLeft = `${currentProduct * productComponentWidth}px`

    const handleNext = () => setCurrentProduct(currentProduct => {
        if(currentProduct > -products.length + 1) {
            return currentProduct - 1
        }
        return currentProduct
    })
    const handlePrevious = () => setCurrentProduct(currentProduct => {
        if(currentProduct < 0) {
            return currentProduct + 1
        }
        return currentProduct
    })

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
            <button onClick={handlePrevious}>previous</button>
            <button onClick={handleNext}>next</button>
            <div className='category-component-list-container'>
                <div className='category-component-relative-ref'>
                    <ul className='category-component-list'  style={{left: distanceLeft}}>
                        {productComponents}
                    </ul>
                </div>
            </div>
        </div>
    )
}
