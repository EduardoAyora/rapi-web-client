import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import './CategoriesNavbar.css'

export default function CategoriesNavbar({categories}) {
    const [navbarOverflowed, setNavbarOverflowed] = useState(false)
    const navbarRef = useRef()

    const NAVBAR_LINKS_STYLE = {
        margin: navbarOverflowed ? 'auto 2em auto 0' : ''
    }

    // cambiando separacion de los botones categoria al desbordar
    useEffect(() => {
        const outerWidth = navbarRef.current.offsetWidth
        const innerWidth = navbarRef.current.scrollWidth
        if(innerWidth > outerWidth) setNavbarOverflowed(true)
    }, [])

    // centrando el scroll horizontal
    useEffect(() => {
        const outerWidth = navbarRef.current.offsetWidth
        const innerWidth = navbarRef.current.scrollWidth
        navbarRef.current.scrollLeft = (innerWidth - outerWidth) / 2
        
    })

    const categoriesLinks = categories.map(categorie => {
        return (
            <Link key={categorie._id} to={`/categorias/${categorie.slug}`} style={NAVBAR_LINKS_STYLE}>
                {categorie.name}
            </Link>
        )
    })

    return (
        <nav className='categories-navbar-container'>
            <div ref={navbarRef} className='categories-navbar'>
                {categoriesLinks}
            </div>
        </nav>
    )
}
