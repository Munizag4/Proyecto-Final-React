import { useContext } from 'react';
import { DataContext } from '../DataContext.jsx';

function SeleccionarUbicacion (){
    const { ubicaciones} = useContext(DataContext);
    const {idUbicacion, setIdUbicacion} = useContext(DataContext)

    return (
        <>
        <label htmlFor="ubicacion">Selecciona su ubicación</label>
        <select className="input-ubicacion" 
            id="ubicacion"
            value={idUbicacion}
            onChange={(e) => setIdUbicacion(e.target.value)}  
            required>
            <option value="" disabled="">...</option>
            {ubicaciones.map((ubicacion) => (
                <option key={ubicacion.id} value={ubicacion.id}>
                    {ubicacion.tipo}
                </option>
            ))}
        </select>
        </>
    )
}
export default SeleccionarUbicacion;