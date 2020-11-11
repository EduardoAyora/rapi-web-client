import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({sidebar, closeSidebar, categories}) {
    const categoryNames = categories.map(category => {
        return (
            <li key={category._id}>
                <Link to={`/categorias/${category.slug}`} onClick={closeSidebar}>
                    {category.name}
                </Link>
            </li>
        )
    })

    return ReactDom.createPortal(
        <>
            {sidebar ? <div className='overlay-styles' onClick={closeSidebar} /> : null}
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <div className='sidebar-top'>
                    <button onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faTimes} className='fa-lg' />
                    </button>
                </div>
                <nav>
                    <ul>
                        {categoryNames}
                    </ul>
                </nav>
                <div className='sidebar-footer'>
                    <span>Rapi Web</span>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
