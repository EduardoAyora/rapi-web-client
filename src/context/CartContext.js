import React, {useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const CartContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({children}) {
    const [cart, setCart] = useLocalStorage('products', [])

    function addToCart(addedProduct, addedPriceId, quantity) {
        const index = cart.findIndex((elementInCart) => (
            (elementInCart.product._id === addedProduct._id) && (elementInCart.priceId === addedPriceId)
        ));
        if(index === -1) {
            setCart(
                prevCart => [
                    ...prevCart,
                    {
                        product: addedProduct,
                        priceId: addedPriceId,
                        quantity: quantity
                    }
                ]
            )
        }
        else {
            const newCart = [...cart];
            newCart[index] = {
                product: addedProduct,
                priceId: addedPriceId,
                quantity: quantity + cart[index].quantity
            };
            setCart(newCart)
        }
    }

    function quitFromCart(removedProduct, removedPriceId) {
        const newInCart = cart.filter(elementInCart => (
            (elementInCart.product._id !== removedProduct._id) || (elementInCart.priceId !== removedPriceId)
        ))
        setCart(newInCart)
    }

    const value = {
        cart: cart,
        setCart: setCart,
        addToCart: addToCart,
        quitFromCart: quitFromCart
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
