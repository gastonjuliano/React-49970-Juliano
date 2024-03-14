import { Link } from "react-router-dom";
import Logociruelo from "../assets/Logo.png";

const Logo = ({tamanio}) => {
    return (
        <Link to="/"><img src={Logociruelo} alt="" width={tamanio} /></Link> 
    )
}

export default Logo;