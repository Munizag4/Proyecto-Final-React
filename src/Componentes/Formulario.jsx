import { useContext } from "react";
import { DataContext } from "../DataContext.jsx";
import SelectProp from "./SelectProp.jsx";
import SeleccionarUbicacion from "./SelecUbicacion.jsx";
import SeleccionarMetros from "./SelectMetros.jsx";
import Cotizar from "./BotonCotizador.jsx";
import {Link} from "react-router-dom";

function Formulario() {
    const {cotizacion} = useContext(DataContext);
    function LimpiarFormulario(){
        document.getElementsByClassName("container-formulario").reset();
    }
    return (
        <>
        
        <div className="container">
            <h1 className="titulo"> Seguros del Hogar 🏡 </h1>    
            <Link to="Historial">
            <button className="historial">Historial </button>            
            </Link>            
        </div>
        <div className="container-formulario">
            <h2 className="subtitulo">Completa los datos solicitados</h2>
            <SelectProp />
            <SeleccionarUbicacion />
            <SeleccionarMetros />        
            <Cotizar />    
            <div>
            <label htmlFor="cotizacion">Valor de la cotizacion:</label>
            {cotizacion}
        </div>      
          
        </div>

        
        </>
    );
}
export default Formulario;
