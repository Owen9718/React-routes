import { React, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./home";
import Soda from "./soda";
import Chips from "./chips";
import Candy from "./candy";

function VendingMachine() {

    return (
        <div>
            <BrowserRouter>
                <Link to='/chips'>Chips</Link>
                <Link to='/candy'>Candy</Link>
                <Link to='/soda'>Soda</Link>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/chips'>
                    <Chips />
                </Route>
                <Route exact path='/candy'>
                    <Candy />
                </Route>
                <Route exact path='/soda'>
                    <Soda />
                </Route>

            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;
