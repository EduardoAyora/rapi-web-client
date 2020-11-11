import React from 'react'
import {useCategories} from '../context/CategoriesContext'
import CategoryComponent from './CategoryComponent'
import './Home.css'

export default function Home({setNewInCart}) {
    const categories = useCategories().categories

    const categoryComponents = categories.map(category => {
        return (
            <li key={category._id}><CategoryComponent category={category} setNewInCart={setNewInCart} /></li>
        )
    })

    return (
        <div className='home'>
            <ul className='home-list'>
                {categoryComponents}
            </ul>
        </div>
    )
}
