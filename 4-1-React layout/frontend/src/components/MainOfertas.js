import { useState } from 'react';

const ListaOfertas = props => { //los links serian parametros?
    return (
        <>
            <div>
                <a href="whatsapp://send?text=https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
                    data-action="share/whatsapp/share">Eviar por WhatsApp1</a>
                <a href="whatsapp://send?text=https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
                    data-action="share/whatsapp/share">Copiar link</a>
            </div>
            <div className="text-center">
                <iframe src="https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf" width="600"
                    height="800" title="Ofertas" className="border-0"></iframe>
            </div>
        </>
    )
}
const CatalogoOfertas = props => { //este catalogo tenemos que subirlo a pulic a mano y aceptarlo en el panel
    return (
        <>
            <div>
                <a href="whatsapp://send?text=https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
                    data-action="share/whatsapp/share">Eviar por WhatsApp2</a>
                <a href="whatsapp://send?text=https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
                    data-action="share/whatsapp/share">Copiar link</a>
            </div>
            <div className="text-center">
                <iframe src="https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf" width="600"
                    height="800" title="Ofertas" className="border-0"></iframe>
            </div>
        </>
    )
}

const DescuentosPorCantidad = props => { //una imagen
    return (
        <>
            <div>
                <a href="whatsapp://send?text=https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
                    data-action="share/whatsapp/share">Eviar por WhatsApp3</a>
                <a href="whatsapp://send?text=https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
                    data-action="share/whatsapp/share">Copiar link</a>
            </div>
            <div className="text-center">
                <img src="https://via.placeholder.com/200x200" className="float-center" alt="Descuentos" />
            </div>
        </>
    )
}


const MainOfertas = (props) => {
    const [lista, setLista] = useState(false);
    const [catalogo, setCatalogo] = useState(false);
    const [descuentos, setDescuentos] = useState(false);


    const handleClick = (e) => {
        if (e === "ListaOfertas") {
            setLista(true)
            setCatalogo(false)
            setDescuentos(false)
        }
        if (e === "CatalogoOfertas") {
            setLista(false)
            setCatalogo(true)
            setDescuentos(false)
        }
        if (e === "DescuentosPorCantidad") {
            setLista(false)
            setCatalogo(false)
            setDescuentos(true)
        }
    }

    return (
        <main className="container-sm text-center d-flex flex-column">
            <div className="btn-group my-3" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={e => handleClick("ListaOfertas")}>Lista de precios Ofertas</button>
                <button type="button" className="btn btn-outline-primary" onClick={e => handleClick("CatalogoOfertas")}>Catalogo de Ofertas</button>
                <button type="button" className="btn btn-outline-primary" onClick={e => handleClick("DescuentosPorCantidad")}>Descuentos por cantidad</button>
            </div> 
                    {
                        lista ? <ListaOfertas /> : catalogo? <CatalogoOfertas /> : descuentos? <DescuentosPorCantidad /> : ""
                    }
            
        </main>
    );
}

export default MainOfertas;
