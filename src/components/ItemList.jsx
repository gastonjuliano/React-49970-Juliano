import Item from "./Item";

const ItemList = ({ productos, titulo }) => {
    const tituloEnMayuscula = titulo.toUpperCase();
    return (
        <div className="container"> 
        <hr />
        <h3 className="main-title">{tituloEnMayuscula}</h3>
            <div className="productos">
            {productos.length > 0 &&
                productos.map((producto) => {
                    return (
                            <Item key={producto.id} producto={producto} />
                    )
                })
            }
            </div>
        </div>
    )
}
export default ItemList;