

const MainCarpeta = (props) => {
  return (
    <main className="container-sm text-center">
        <form className="row g-3">
            <div className="col-sm-3">
                <label htmlFor="rubro" className="form-label">Rubro</label>
                <select id="marca" className="form-select" defaultValue="...">
                    <option>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-sm-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <select id="marca" className="form-select" defaultValue="...">
                    <option>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-sm-3">
                <label htmlFor="opciones" className="form-label">Opciones</label>
                <select id="opciones" className="form-select" defaultValue="Todos">
                    <option>Ofertas</option>
                    <option>Representaciones</option>
                    <option>Todos</option>
                </select>
            </div>
            <div className="col-sm-3 d-flex align-items-end">
                <button type="submit" className="btn btn-primary">Generar Lista</button>
            </div>
        </form>
        <hr />
        <div className="row justify-content-evenly">
            <h3>Rubro 1</h3>
            <div className="col-3 d-flex flex-column">
                <span>Producto 1</span>
                <img src="https://via.placeholder.com/200x150" alt="Producto 1" />
                <h6>Embalaje:<strong>12</strong>
                </h6>
                <h3>$1.238,32</h3>
            </div>
            <div className="col-3 d-flex flex-column">
                <span>Producto 2</span>
                <img src="https://via.placeholder.com/200x150" alt="Producto 2" />
                <h6>Embalaje:<strong>12</strong>
                </h6>
                <h3>$1.238,32</h3>
            </div>
            <div className="col-3 d-flex flex-column">
                <span>Producto 3</span>
                <img src="https://via.placeholder.com/200x150" alt="Producto 3" />
                <h6>Embalaje:<strong>12</strong>
                </h6>
                <h3>$1.238,32</h3>
            </div>
            <div className="col-3 d-flex flex-column">
                <span>Producto 4</span>
                <img src="https://via.placeholder.com/200x150" alt="Producto 4" />
                <h6>Embalaje:<strong>12</strong>
                </h6>
                <h3>$1.238,32</h3>
            </div>
            <h3>Rubro 2</h3>
            <div className="col-3 d-flex flex-column">
                <span>Producto 5</span>
                <img src="https://via.placeholder.com/200x150" alt="Producto 1" />
                <h6>Embalaje:<strong>12</strong>
                </h6>
                <h3>$1.238,32</h3>
            </div>
            <div className="col-3 d-flex flex-column">
                <span>Producto 6</span>
                <img src="https://via.placeholder.com/200x150" alt="Producto 2" />
                <h6>Embalaje:<strong>12</strong>
                </h6>
                <h3>$1.238,32</h3>
            </div>
            <div className="col-3 d-flex flex-column">
                <span>Producto 7</span>
                <img src="https://via.placeholder.com/200x150" alt="Producto 3" />
                <h6>Embalaje:<strong>12</strong>
                </h6>
                <h3>$1.238,32</h3>
            </div>
        </div>
    </main>
  );
}

export default MainCarpeta;
