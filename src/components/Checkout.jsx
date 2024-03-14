import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido) 
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '40px' }}>
                <h1 className="main-title" style={{ color: 'black' }}>
                    ¡Sumergite en la fantasia de los dragones!
                </h1>
                <br />
                <p style={{ fontSize: '22px', marginBottom: '10px' }}>El ID de tu pedido es:</p>
                <h4 style={{ color: 'red', fontWeight: 'bold' }}>{pedidoId}</h4>

            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                {}
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} required />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} required />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} required />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}

export default Checkout;