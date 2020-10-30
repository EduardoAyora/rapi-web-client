import React from 'react'
import {useCategories} from '../context/CategoriesContext'
import CategoryComponent from './CategoryComponent'
import './Home.css'

export default function Home() {
    const categories = useCategories().categories

    const categoryComponents = categories.map(category => {
        return (
            <li key={category._id}><CategoryComponent category={category} /></li>
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
