import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

import "bulma/css/bulma.css"

const NavBar = () => {
    return (
        <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <Link to={'/'} className="navbar-item">
                        <h2 className="title">
                            Felpita's Amigurumis
                        </h2>
                    </Link>
                </div>
            </div>
            <div className="navbar-menu is-active">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <NavLink to={`/category/small`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Llaveros</NavLink>
                    </div>
                    <div className="navbar-item">
                        <NavLink to={`/category/medium`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Medianos</NavLink>
                    </div>
                    <div className="navbar-item">
                        <NavLink to={`/category/big`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Grandes</NavLink>
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