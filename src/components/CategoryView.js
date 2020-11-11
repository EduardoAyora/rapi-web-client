import React, {useState, useEffect} from 'react'
import {useCategories} from '../context/CategoriesContext'
import axios from 'axios'
import './CategoryView.css'

export default function CategoryView({match}) {
    const [loading, setLoading] = useState(true)
    const category = useCategories().categories.find(({slug}) => slug === match.params.slug)
    const setCategories = useCategories().setCategories

    useEffect(() => {
        if(category.isComplete === true) setLoading(false)
        else {
            axios.get(`${process.env.REACT_APP_API_URL}/categories/${category.slug}`).then(res => {
                setCategories(prevCategories => {
                    const newCategories = prevCategories.map(prevCategorie => {
                        if(prevCategorie.slug === category.slug) {
                            prevCategorie = res.data
                            prevCategorie.isComplete = true
                            return prevCategorie
                        }
                        return prevCategorie
                    })
                    return newCategories
                })
                setLoading(false)
            })
        }
    }, [category, setCategories])

    let products
    if(loading) products = <span>Cargando...</span>
    else {
        products = category.products.map(product => {
            return <li key={product._id}>{product.name}</li>
        })
    }

    return (
        <div className='category-view'>
            <div className='category-view-title'>
                {category.name}
            </div>
            <div className='category-view-body'>
                <ul className='category-view-list'>
                   {products}
                </ul>
            </div>
        </div>
    )
}
