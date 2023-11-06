import React from "react";
import { useContext } from "react";
import { DataContext } from "../DataContext.jsx";

function Cotizar() {
    
    const { idPropiedad, idUbicacion, metros, propiedades, ubicaciones,
        cotizacion, setCotizacion } = useContext(DataContext);

    const costoM2 = 35.86;
    const factorPropiedad = propiedades.find((propiedad) => propiedad.id === idPropiedad)?.factor;
    const tipoPropiedad = propiedades.find((propiedad) => propiedad.id === idPropiedad)?.tipo;
    const factorUbicacion = ubicaciones.find((ubicacion) => ubicacion.id == idUbicacion)?.factor;
    const tipoUbicacion = ubicaciones.find((ubicacion) => ubicacion.id == idUbicacion)?.tipo;

    const handleCotizar = () => {
        if (idPropiedad === null || idUbicacion === null || metros === null ) {
            alert("Complete todos los campos");
            return;
        }

        const resultado = (factorPropiedad * factorUbicacion * metros * costoM2).toFixed(2);
        setCotizacion(resultado)

        const nuevaCotizacion = {
            fechaHora: new Date().toLocaleString(),
            tipoPropiedad,
            tipoUbicacion,
            importePoliza: resultado,
          };

        const historial = JSON.parse(localStorage.getItem('historial')) || [];
        historial.push(nuevaCotizacion);    
        localStorage.setItem('historial', JSON.stringify(historial));

    };
    return (
        <>
        <div>
            <button className="btn-cotizar" onClick={handleCotizar}>Cotizar</button>            
        </div>
        </>
    );
}
export default Cotizar;
