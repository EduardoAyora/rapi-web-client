import React from 'react'

export default function ProductComponent({product, productComponentWidth}) {
    const name = product.name

    return (
        <li className='product-component' style={{width: `${productComponentWidth}px`}}>
            {name}
        </li>
    )
}
