import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Sidebar from './Sidebar'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const closeSidebar = () => setSidebar(false)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-head'>
                    <button className='navbar-burguer-button' onClick={() => setSidebar(true)}>
                        <FontAwesomeIcon icon={faBars} className='fa-lg' />
                    </button>
                    <Link to='/' className='navbar-logo'>
                        Logo
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

            <Sidebar sidebar={sidebar} closeSidebar={closeSidebar} />
        </>
    )
}
