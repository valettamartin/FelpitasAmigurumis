import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavContainer">
            <h2>Felpita's</h2>
            <div>
                <button>Llaveros</button>
                <button>Peluches</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar