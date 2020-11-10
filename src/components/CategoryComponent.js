import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom";
import ProductComponent from './ProductComponent'
import './CategoryComponent.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function CategoryComponent({category}) {
    const [currentProduct, setCurrentProduct] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)

    const componentListRef = useRef()

    const RELATIVE_COMPONENT_STYLE = {
        height: `${containerHeight}px`
    }

    useEffect(() => {
        const listHeigth = componentListRef.current.offsetHeight
        if(listHeigth > containerHeight) setContainerHeight(listHeigth)
    }, [])

    const handleNext = () => setCurrentProduct(currentProduct => {
        if(currentProduct > - products.length + 1) return currentProduct - 1
        return currentProduct
    })
    const handlePrevious = () => setCurrentProduct(currentProduct => {
        if(currentProduct < 0) return currentProduct + 1
        return currentProduct
    })

    const name = category.name
    const products = category.products
    const productComponentWidth = 300
    const distanceLeft = `${currentProduct * productComponentWidth}px`

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
                <button onClick={handlePrevious} className='category-component-button left-button'>
                    <FontAwesomeIcon icon={faChevronLeft} className='fa-lg' style={LEFT_BUTTON_STYLE} />
                </button>
                <div style={RELATIVE_COMPONENT_STYLE} className='category-component-relative-ref'>
                    <ul ref={componentListRef} className='category-component-list'  style={{left: distanceLeft}}>
                        {productComponents}
                    </ul>
                </div>
                <button onClick={handleNext} className='category-component-button right-button'>
                    <FontAwesomeIcon icon={faChevronRight} className='fa-lg' style={RIGHT_BUTTON_STYLE} />
                </button>
            </div>
        </div>
    )
}
