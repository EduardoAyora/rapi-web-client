import React from 'react'
import {Switch, Route} from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'

export default function Main() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/carrito'>
                    Carrito
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </>
    )
}
