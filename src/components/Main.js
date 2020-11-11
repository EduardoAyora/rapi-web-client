import React from 'react'
import {Switch, Route} from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import CategoryView from './CategoryView'
import './Main.css'

export default function Main() {
    return (
        <>
            <Navbar />
            <div className='main'>
                <Switch>
                    <Route path='/categorias/:slug' render={(props) => <CategoryView {...props} />} />
                    <Route path='/carrito'>
                        Carrito
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </>
    )
}
