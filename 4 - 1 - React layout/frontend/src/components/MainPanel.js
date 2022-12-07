import { useState } from 'react';

const PanelOfertas = props => {
    return (
        <div className="col-sm-6 ">
            <form className="my-3">
                <h4>Cambiar descuentos por cantidad</h4>
                <div className="input-group">
                    <input type="file" className="form-control" id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    <button className="btn btn-primary" type="button"
                        id="inputGroupFileAddon04">Enviar</button>
                </div>
            </form>
            <h6>Recuerde que la imagen debe tener 400*300px</h6>
        </div>
    )
}

const PanelHome = props => {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" placeholder="Titulo bienvenida" />
                        <input type="file" />
                        <textarea defaultValue="Aca iria el texto que queremos mostrar en la bienvenida" />
                    </div>
                </div>
                <button>Eliminar</button>
                <button>Guardar Cambios</button>
            </form>
            <form>
                <div className="row">
                    <div className="col-sm-12 d-flex">
                        <input type="file" />
                        <textarea defaultValue="Aca iria el texto que queremos mostrar en la bienvenida" />
                    </div>
                    <button>Eliminar</button>
                    <div className="col-sm-12 d-flex">
                        <input type="file" />
                        <textarea defaultValue="Aca iria el texto que queremos mostrar en la bienvenida" />
                    </div>
                    <button>Eliminar</button>
                    <div className="col-sm-12 d-flex">
                        <input type="file" />
                        <textarea defaultValue="Aca iria el texto que queremos mostrar en la bienvenida" />
                    </div>
                    <button>Eliminar</button>
                    <button>Agregar</button>
                    <button>Guardar Cambios</button>
                </div>
            </form>
        </>
    )
}

const PanelCondiciones = props => {
    return (
        <form>
            <div className="row">
                <div className="col-sm-12">
                    <input type="file" />
                    <h6>Recuerde que la imagen debe de ser de 300*200px</h6>
                    <input type="text" placeholder="Titulo" />
                    <textarea defaultValue="Aca iria el texto que queremos mostrar en condiciones" />
                </div>
            </div>
            <button>Eliminar</button>
            <button>Agregar</button>
            <button>Guardar Cambios</button>
        </form>
    )
}

const MainPanel = (props) => {
    const [showOfertas, setShowOfertas] = useState(false);
    const [showCondiciones, setShowCondiciones] = useState(false);
    const [showHome, setShowHome] = useState(false);

    const handleClick = (e) => {
        if (e === "ofertas") {
            if (showOfertas === false) {
                setShowOfertas(true)
            } else {
                setShowOfertas(false)
            }
        }
        if (e === "condiciones") {
            if (showCondiciones === false) {
                setShowCondiciones(true)
            } else {
                setShowCondiciones(false)
            }
        }
        if (e === "home") {
            if (showHome === false) {
                setShowHome(true)
            } else {
                setShowHome(false)
            }
        }
    }
    
    return (
        <main className="container-sm text-center d-flex flex-column">
            <div className="d-flex flex-column align-items-center my-2">
                <button type="button" className="btn btn-danger my-2 col-sm-6 ">Autorizar ofertas y/o representaciones</button>
                <hr />
                <button type="button" className="btn btn-primary btn-lg my-2" onClick={e => handleClick("ofertas")} >OFERTAS</button>
                {
                    showOfertas ? <PanelOfertas /> : ""
                }
            </div>
            <div className="d-flex flex-column align-items-center my-2">
                <button type="button" className="btn btn-primary btn-lg my-2" onClick={e => handleClick("condiciones")}>CONDICIONES</button>
                {
                    showCondiciones ? <PanelCondiciones /> : ""
                }

            </div>
            <div className="d-flex flex-column align-items-center my-2">
                <button type="button" className="btn btn-primary btn-lg my-2" onClick={e => handleClick("home")}>HOME</button>
                {
                    showHome ? <PanelHome /> : ""
                }
            </div>
        </main>
    );
}

export default MainPanel;
