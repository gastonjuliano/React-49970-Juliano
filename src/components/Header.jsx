import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
    return (
        <div className="container-fluid my-4">
            <div className="row ">
                <div className="col-md-3 m-auto">
                    <Logo tamano={300} />
                </div>
                <div className="col-md-8 d-flex justify-content-end">
                    <NavBar type={"nav"} showCarritoWidget={true} />
                </div>
            </div>
        </div>
    )
}

export default Header;