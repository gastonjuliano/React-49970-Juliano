import Instagram from "../assets/ig.png";
import { Link } from 'react-router-dom';

const Redes = () => {
    const cssImagen = {
        margin: '10px',
        height: '40px',
        width: '40px',
    };

    return (
        <div>
            <Link to="https://www.instagram.com/ciruelocabral/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" style={cssImagen} />
            </Link>
        </div>
    );
}

export default Redes;
