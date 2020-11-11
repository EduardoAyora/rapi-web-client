import React, {useEffect} from 'react'

export default function Cart({setNewInCart}) {
    useEffect(() => {
        setNewInCart(false)
    }, [])

    return (
        <div>
            Cart
        </div>
    )
}
