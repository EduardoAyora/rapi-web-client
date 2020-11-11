import React, {useState} from 'react'
import {Switch, Route} from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import CategoryView from './CategoryView'
import Cart from './Cart'
import './Main.css'

export default function Main() {
    const [newInCart, setNewInCart] = useState(false)

    return (
        <>
            <Navbar newInCart={newInCart} />
            <div className='main'>
                <Switch>
                    <Route path='/categorias/:slug' render={(props) => 
                        <CategoryView {...props} setNewInCart={setNewInCart} />} />
                    <Route path='/carrito'>
                        <Cart setNewInCart={setNewInCart} />
                    </Route>
                    <Route path='/'>
                        <Home setNewInCart={setNewInCart} />
                    </Route>
                </Switch>
            </div>
        </>
    )
}
