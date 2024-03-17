import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

import "bulma/css/bulma.css"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <Link to={'/'} className="navbar-item">
                        <h1 className="title is-size-2">
                            Felpita's Amigurumis
                        </h1>
                    </Link>
                </div>
            </div>
            <div className="navbar-menu is-active">
                <div className="navbar-end">
                    <div className="navbar-item is-size-5 has-text-dark">
                        <NavLink to={`/category/Pequeño`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Llaveros</NavLink>
                    </div>
                    <div className="navbar-item is-size-5 has-text-dark">
                        <NavLink to={`/category/Mediano`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Medianos</NavLink>
                    </div>
                    <div className="navbar-item is-size-5 has-text-dark">
                        <NavLink to={`/category/Grande`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Grandes</NavLink>
                    </div>
                    <div className="navbar-item">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar