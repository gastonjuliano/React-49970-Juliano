import FooterRedes from "./FooterRedes";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col">
                    <NavBar type={"nav flex-row"} showCarritoWidget={false}/>
              </div>
              <div className="col">
              </div>
              <div className="col">
                <FooterRedes/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;