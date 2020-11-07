import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useCategories} from '../context/CategoriesContext'
import Sidebar from './Sidebar'
import CategoriesNavbar from './CategoriesNavbar'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBox, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const categories = useCategories().categories

    const closeSidebar = () => setSidebar(false)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-head'>
                    <button className='navbar-burguer-button' onClick={() => setSidebar(true)}>
                        <FontAwesomeIcon icon={faBars} className='fa-lg' />
                    </button>
                    <Link to='/' className='navbar-logo'>
                        <FontAwesomeIcon icon={faBox} className='fa-2x' />
                    </Link>
                </div>
                <div className='navbar-nav'>
                    <ul>
                        <li>
                            <Link to='/carrito'>
                                <FontAwesomeIcon icon={faShoppingBasket} className='fa-lg' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <CategoriesNavbar categories={categories} />
            <Sidebar categories={categories} sidebar={sidebar} closeSidebar={closeSidebar} />
        </>
    )
}
