import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="bg-danger py-2">
        <div className="container-sm text-center">
            <div className="row d-flex flex-row align-items-center">
                <div className="col-sm-3 d-flex flex-column">
                    <h5>Seguinos en las redes</h5>
                    <ul className="ul-contact">
                        <li><i className="bi bi-facebook p-2"></i><Link to="#">Faccebok</Link></li>
                        <li><i className="bi bi-instagram p-2"></i><Link to="#">Instagram</Link></li>
                        <li><i className="bi bi-twitter p-2"></i><Link to="#">Twitter</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 d-flex flex-column">
                    <h5>Necesitas que enviemos un representante?</h5>
                    <form>
                        <input type="text" className="form-control my-1" placeholder="Nombre" aria-label="Nombre" />
                        <input type="text" className="form-control my-1" placeholder="Localidad" aria-label="Localidad" />
                        <input type="text" className="form-control my-1" placeholder="Direccion" />
                        <textarea className="form-control my-1" placeholder="Mensaje" aria-label="Mensaje"></textarea>
                        <button className="btn btn-primary my-1" type="submit">Enviar</button>
                    </form>
                </div>
                <div className="col-sm-3 d-flex flex-column">
                    <ul className="ul-contact">
                        <li><i className="bi bi-telephone-inbound-fill p-2"></i><span>Telefono: 34134134134</span></li>
                        <li><i className="bi bi-envelope-fill p-2"></i><span>contacto@distribuidoraX.com.ar</span></li>
                        <li><i className="bi bi-geo-alt-fill p-2"></i><span>Cordoba 1234, Rosario, Santa Fe</span></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <h6 className="container text-center">Todos los derechos reservados y la sarasa</h6>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
