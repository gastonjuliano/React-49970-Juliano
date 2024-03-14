import { Link } from "react-router-dom"

import CarritoWidget from "./CarritoWidget";
const NavBar = ({ type, showCarritoWidget }) => {
    return (
        <ul className={type}>
            <li className="nav-item">
                <Link className="nav-link text-light fs-4" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light fs-4" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light fs-4" to="/productos/libros">Libros</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light fs-4" to="/productos/dibujos">Dibujos</Link>
            </li>
            {showCarritoWidget && (
                <li>
                    <CarritoWidget />
                </li>
            )}
        </ul>
    )
}

export default NavBar;