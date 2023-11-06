import React from "react";
import {Link} from "react-router-dom";

function Historial(){
    const historialGuardado = JSON.parse(localStorage.getItem('historial'));
    if(historialGuardado !== null){
        return(
            <>
            <div>
                <h1 className="titulo-hist">Historial de Cotizaciones</h1>
                <Link to="/">
                    <button className="historial" >Volver </button>            
                </Link> 
                <div className="container-tabla">                    
                    <table align="center">
                        <thead>
                            <tr>
                                <th>Fecha y Hora</th>
                                <th>Tipo de Propiedad</th>
                                <th>Tipo de Ubicación</th>
                                <th>Importe Mensual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historialGuardado.map((registro) => (
                                <tr>
                                    <td> {registro.fechaHora} </td>
                                    <td> {registro.tipoPropiedad} </td>
                                    <td> {registro.tipoUbicacion} </td>
                                    <td> {registro.importePoliza} </td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>  
            </div>            
            </>
        );
    }else{
        return(
            <div>si la encontro</div>
        )
    }
}

export default Historial;