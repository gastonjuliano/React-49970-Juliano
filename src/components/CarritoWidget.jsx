import { Link } from 'react-router-dom' ;
import { CartContext } from '../context/CartContext';
import React from 'react'; 
import { useContext } from 'react';
import Carrito from "../assets/Carrito.png"



const CarritoWidget = () => {


    const { cantidadProductos } = useContext(CartContext);

    return (
        <div>
            <Link className="menu-link nav-link text-dark fs-4" to="/carrito">
            <img src={Carrito} alt="icono-carrito" width={55} />
                <span className="nposition-absolute top-0 start-100 translate-middle badge bg-dark rounded-circle">{cantidadProductos()}</span>
            </Link>
        </div>
    )
}

export default CarritoWidget;