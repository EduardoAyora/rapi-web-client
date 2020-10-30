import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'

const CategoriesContext = React.createContext()

export function useCategories() {
    return useContext(CategoriesContext)
}

export function CategoriesProvider({children}) {
    const [categories, setCategories] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/categories').then(res => {
            setCategories(res.data)
            setLoaded(true)
        }).catch(err => {
            console.log(err.response.data.message)
        })
    }, [])

    const value = {
        categories: categories,
        setCategories: setCategories
    }

    if(!loaded) return <div>Cargando...</div>

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}