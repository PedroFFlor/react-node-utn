
import { Link } from "react-router-dom"
import Nav from './Nav';

const Header = (props) => {
  return (
    <>
      <header className="bg-primary">
        <div className="container-sm py-3 d-flex justify-content-between">
          <Link className="navbar-brand col-2" to="/">
            <img src="https://via.placeholder.com/100x50" alt="Logo" />
          </Link>
          <form className="d-flex col-6" role="search">
            <div className="input-group mb-3 fs-6">
              <input type="text" className="form-control" placeholder="Usuario" aria-label="Usuario" />
                <input type="text" className="form-control" placeholder="Contraseña" aria-label="Contraseña" />
                  <button className="btn btn-danger" type="submit">Entrar</button>
                </div>
              </form>
            </div>
            <Nav/>
          </header>
        </>
        );
}

        export default Header;
