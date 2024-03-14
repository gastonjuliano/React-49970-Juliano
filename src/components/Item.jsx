import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div className="producto">
            <div className="card m-2" style={{ width: '16rem' }}>
                <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <hr />
                    <p className="card-text">${producto.precio}</p>
                    <p className="card-text">{producto.descripcion}</p>
                    <Link className="ver-mas" to={`/item/${producto.id}`}>Detalle</Link> 
                </div>
            </div>
        </div>
    );
};

export default Item;
