import React, {useState, useRef, useEffect} from 'react'
import {useCart} from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCheck, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './ProductComponent.css'

export default function ProductComponent({product, productComponentWidth, setNewInCart}) {
    const addToCart = useCart().addToCart
    const [quantity, setQuantity] = useState(1)
    const [priceCounter, setPriceCounter] = useState(0)
    const [checkedButton, setCheckedButton] = useState(false)
    const pricesArray = product.prices

    const checkedButtonTimeoutRef = useRef()
    const newInCartTimeoutRef = useRef()

    useEffect(() => {
        return () => {
            clearTimeout(checkedButtonTimeoutRef.current)
            clearTimeout(newInCartTimeoutRef.current)
        }
    }, [])

    function buttonMinusClick() {
        if(quantity > 1) setQuantity(prevQuantity => prevQuantity - 1)
    }

    function buttonPlusClick() {
        if(quantity !== '') setQuantity(prevQuantity => prevQuantity + 1)
        else setQuantity(1)
    }

    function inputChange(event) {
        let value = event.target.value
        if (value !== '') {
            if(value > 0) setQuantity(parseInt(value))
            else setQuantity(1)
        }
        else setQuantity(value)
    }

    function addToCartClick() {
        let tempQuantity = quantity
        if(tempQuantity === ""){
            tempQuantity = 1
            setQuantity(tempQuantity)
        }
        addToCart(product, pricesArray[priceCounter]._id, tempQuantity)

        setNewInCart(false)
        const waitForChangeInCart = () => {setNewInCart(true)}
        newInCartTimeoutRef.current = setTimeout(waitForChangeInCart, 10)

        setCheckedButton(true)
        const waitForChangeButton = () => {setCheckedButton(false)}
        checkedButtonTimeoutRef.current = setTimeout(waitForChangeButton, 1000)
    }

    function buttonRightArrowClick() {
        if(priceCounter < (pricesArray.length - 1)) setPriceCounter(prevPriceCounter => prevPriceCounter + 1)
        else setPriceCounter(0)
    }

    function buttonLeftArrowClick() {
        if(priceCounter > 0) setPriceCounter(prevPriceCounter => prevPriceCounter - 1)
        else setPriceCounter(pricesArray.length - 1)
    }

    // definiendo contenido de boton agregar
    let addToCartButtonContent = <span><FontAwesomeIcon icon={faShoppingBasket} /> Agregar a carrito</span>
    if(checkedButton === true) addToCartButtonContent = <FontAwesomeIcon icon={faCheck} className="fa-lg" style={{color: 'green'}} />

    // renderizado de grupo para modificar cantidad y boton de agregar
    const addToCartComponent = (
        <div>
            <div className='product-component-change-quantity-group'>
                <button onClick={buttonMinusClick}>-</button>
                <input type="number" value={quantity} onChange={inputChange} />
                <button onClick={buttonPlusClick}>+</button>
            </div>
            <button className="product-component-add-button" onClick={addToCartClick}>
                {addToCartButtonContent}
            </button>
        </div>
    )

    if(pricesArray.length === 1) {
        const price = pricesArray[0]
        return (
            <ProductComponentContainer product={product} productComponentWidth={productComponentWidth}>
                <div>
                    <span>{price.description}: </span>
                    <span className='product-component-price-value'>${price.value.toFixed(2)}</span>
                </div>
                <br/>
                {addToCartComponent}
            </ProductComponentContainer>
        )
    }
    else if(pricesArray.length > 1) {
        const price = pricesArray[priceCounter];
        return (
            <ProductComponentContainer product={product} productComponentWidth={productComponentWidth}>
                <div className='product-component-price'>
                    <button type="button" className="product-component-left-button" onClick={buttonLeftArrowClick}>
                        <FontAwesomeIcon icon={faArrowLeft} className="fa-lg" />
                    </button>
                    <div className='product-component-price-middle'>
                        <span>{price.description}</span>
                        <span className='product-component-price-value'>${price.value.toFixed(2)}</span>
                    </div>
                    <button type="button" className="product-component-right-button" onClick={buttonRightArrowClick}>
                        <FontAwesomeIcon icon={faArrowRight} className="fa-lg" />
                    </button>
                </div>
                <br/>
                {addToCartComponent}
            </ProductComponentContainer>
        )
    }
    else {
        return (
            <ProductComponentContainer product={product} productComponentWidth={productComponentWidth}></ProductComponentContainer>
        )
    }
}

function ProductComponentContainer({product, children, productComponentWidth}) {
    const name = product.name
    const imageUrl = product.image_url
    const ingredients = product.ingredients

    return (
        <li style={{width: `${productComponentWidth}px`}}>
            <div className='product-component'>
                <div className='product-component-image-container'>
                    <img src={process.env.REACT_APP_API_URL + imageUrl} alt={name} />
                </div>
                <div className='product-component-info'>
                    <span className='product-component-name'>
                        {name}
                    </span>
                    <p className='product-component-ingredients'>
                        {ingredients}
                    </p>
                    {children}
                </div>
            </div>
        </li>
    )
}
