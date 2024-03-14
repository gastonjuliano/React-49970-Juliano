import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }
    return (
        <div className="container">
            <h2 className="text-dark fs-2">Compras por realizar</h2>
            {carrito.map((prod) => (
                <div key={prod.id} className="mb-4 border p-3">
                    <h3>{prod.nombre}</h3>
                    <p className="mb-1">Precio unidad: ${prod.precio}</p>
                    <p className="mb-1">Precio total: ${prod.precio * prod.cantidad}</p>
                    <p className="mb-0">Cantidad: {prod.cantidad}</p>
                </div>
            ))}
            {carrito.length > 0 ? (
                <>
                    <h2 className="mt-4">Precio total: ${precioTotal()}</h2>
                    <br />
                    <button className="btn btn-dark me-2" onClick={handleVaciar}>
                        Vaciar
                    </button>
                    <Link to="/checkout" className="btn btn-success">
                        Comprar!
                    </Link>
                </>
            ) : (
                <h2 className="mt-4">No hay contenido en el carrito aun!</h2>
            )}
        </div>

    )

}

export default Carrito;