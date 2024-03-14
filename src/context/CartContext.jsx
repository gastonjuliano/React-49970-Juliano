import { createContext } from "react";
import { useState, useEffect } from "react";



export const CartContext = createContext();

const carritoInicial =JSON.parse(localStorage.getItem("carrito"))|| [];

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito]
        const terminado = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (terminado) {
            terminado.cantidad += cantidad;
        }
        else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);

    }

    const cantidadProductos = () => {
        return carrito.reduce((acum, prod) => acum + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    }
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])
    

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadProductos,
            precioTotal,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider >
    )
}