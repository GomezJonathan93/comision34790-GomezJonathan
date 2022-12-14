import React from "react";
import CartWidget from "./cartwidget";
//import ListContainer from "./itemlistcontainer";
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return(
        <header>
            {/* <div className="div-titulo">
            <h1>Fishy Fishy Dish Store</h1>
            </div>
            <div className="greeting">
                <ListContainer
                    nombre= "main" campeon= "Yuumi"     
                />
            </div> */}
            <nav className="navBar">
                <ul className="ulNav">
                        <Link to='/Eloboost'>Eloboost</Link>
                        <Link to='/Coaching'>Coaching</Link>
                        <Link to='/Merchandising'>Merchandising</Link>
                        <CartWidget />
                </ul>
            </nav>
            </header>
    )
}

export default NavBar