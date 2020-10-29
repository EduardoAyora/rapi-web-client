import React from 'react'
import {Switch, Route} from "react-router-dom"

export default function Main() {
    return (
        <div>
            <Switch>
                <Route path='/carrito'>
                    Carrito
                </Route>
                <Route path='/'>
                    Inicio
                </Route>
            </Switch>
        </div>
    )
}
