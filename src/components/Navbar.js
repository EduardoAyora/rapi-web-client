import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useCategories} from '../context/CategoriesContext'
import Sidebar from './Sidebar'
import CategoriesNavbar from './CategoriesNavbar'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBox, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

export default function Navbar({newInCart}) {
    const [sidebar, setSidebar] = useState(false)
    const categories = useCategories().categories

    const closeSidebar = () => setSidebar(false)

    let newInCartIcon
    if(newInCart === true) {
        newInCartIcon = (
            <span className="new-in-cart-icon-container">
                <span className="new-in-cart-icon"></span>          
            </span>
        )
    }

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
                            <Link style={{position: 'relative'}} to='/carrito'>
                                <FontAwesomeIcon icon={faShoppingBasket} className='fa-lg' />
                                {newInCartIcon}
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
