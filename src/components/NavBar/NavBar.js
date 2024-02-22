import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

import "bulma/css/bulma.css"

const NavBar = () => {
    return (
        <nav className="hero hero-head is-primary NavBar">
            <Link to={'/'}>
                <h2 className="title">Felpita's Amigurumis</h2>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/small`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Llaveros</NavLink>
                <NavLink to={`/category/medium`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Medianos</NavLink>
                <NavLink to={`/category/big`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Grandes</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar