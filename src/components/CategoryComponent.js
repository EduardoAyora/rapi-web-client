import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom";
import ProductComponent from './ProductComponent'
import './CategoryComponent.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function CategoryComponent({category, setNewInCart}) {
    const [currentProduct, setCurrentProduct] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)

    const innerComponentRef = useRef()

    const CONTAINER_COMPONENT_STYLE = {height: `${containerHeight}px`}
    const ARROW_STYLE = {top: `${containerHeight / 2}px`}

    useEffect(() => {
        const innerHeigth = innerComponentRef.current.offsetHeight
        if(innerHeigth > containerHeight) setContainerHeight(innerHeigth + 12)
    }, [containerHeight])

    const handleNext = () => setCurrentProduct(currentProduct => {
        if(currentProduct > - products.length) return currentProduct - 1
        return currentProduct
    })
    const handlePrevious = () => setCurrentProduct(currentProduct => {
        if(currentProduct < 0) return currentProduct + 1
        return currentProduct
    })

    const name = category.name
    const products = category.products
    const productComponentWidth = 360
    const distanceLeft = `${currentProduct * productComponentWidth}px`

    // incluyendo estilo de flecha desabilitada
    const LEFT_BUTTON_STYLE = {color: ''}
    const RIGHT_BUTTON_STYLE = {color: ''}
    if(!(currentProduct > - products.length)) RIGHT_BUTTON_STYLE.color = '#777a834d'
    if(!(currentProduct < 0)) LEFT_BUTTON_STYLE.color = '#777a834d'

    const productComponents = products.map(product => {
        return (
            <ProductComponent key={product._id} product={product} 
                productComponentWidth={productComponentWidth} setNewInCart={setNewInCart} />
        )
    })

    return (
        <div className='category-component'>
            <h2 className='category-title'>
                <Link to={`/categorias/${category.slug}`}>
                    {name}
                </Link>
            </h2>
            <div className='category-component-list-container'>
                <button onClick={handlePrevious} style={ARROW_STYLE} className='category-component-button left-button'>
                    <FontAwesomeIcon icon={faChevronLeft} className='fa-lg' style={LEFT_BUTTON_STYLE} />
                </button>
                <div style={CONTAINER_COMPONENT_STYLE} className='category-component-relative-ref'>
                    <ul ref={innerComponentRef} className='category-component-list'  style={{left: distanceLeft}}>
                        {productComponents}
                        <li className='category-component-view-more' style={{width: productComponentWidth - 45, height: productComponents.length === 0 ? '140px' : ''}} >
                            <Link to={`/categorias/${category.slug}`}>
                                Ver más
                            </Link>
                        </li>
                    </ul>
                </div>
                <button onClick={handleNext} style={ARROW_STYLE} className='category-component-button right-button'>
                    <FontAwesomeIcon icon={faChevronRight} className='fa-lg' style={RIGHT_BUTTON_STYLE} />
                </button>
            </div>
        </div>
    )
}
