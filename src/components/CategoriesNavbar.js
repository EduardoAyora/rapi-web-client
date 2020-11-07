import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import './CategoriesNavbar.css'

export default function CategoriesNavbar({categories}) {
    const [navbarOverflowed, setNavbarOverflowed] = useState(false)
    const navbarRef = useRef()
    const outerWidth = useRef()
    const innerWidth = useRef()

    const NAVBAR_LINKS_STYLE = {
        margin: navbarOverflowed ? 'auto 2em auto 0' : ''
    }

    useEffect(() => {
        outerWidth.current = navbarRef.current.offsetWidth
        innerWidth.current = navbarRef.current.scrollWidth
        if(innerWidth.current > outerWidth.current) setNavbarOverflowed(true)
    }, [])

    useEffect(() => {
        if(outerWidth.current != null && innerWidth.current != null) {
            outerWidth.current = navbarRef.current.offsetWidth
            innerWidth.current = navbarRef.current.scrollWidth
            navbarRef.current.scrollLeft = (innerWidth.current - outerWidth.current) / 2
        }
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
