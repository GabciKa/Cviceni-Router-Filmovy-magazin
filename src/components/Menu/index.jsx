import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./style.css"


const Menu = () => {
	return (
		<>
		   <nav className="menu">
                {/* <Link to="/">Home</Link> */}
                <NavLink className={ ({isActive}) =>  isActive ? "aktivni" : "" } to="/">Home</NavLink> {/* destrukturuju "isActive" a pak se pomocí ternárního operátoru zeptám, jestli je active a pokud ano, říkám zobraz třídu aktivni, pokud ne, nic nedělej */}
                <NavLink className={ ({isActive}) =>  isActive ? "aktivni" : "" } to="/reviews">Reviews</NavLink>
                <NavLink className={ ({isActive}) =>  isActive ? "aktivni" : "" } to="/articles">Articles</NavLink>
                <NavLink className={ ({isActive}) =>  isActive ? "aktivni" : "" } to="/movies">Movies</NavLink>
            </nav>
        </>
	);
}

export default Menu;