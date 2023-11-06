import { useContext } from "react";
import { DataContext } from "../DataContext.jsx";

function SeleccionarPropiedad() {
  const { propiedades, idPropiedad, setIdPropiedad } = useContext(DataContext);

  return (
    <>
      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>      
        <select
            id="tipoPropiedad"
            value={idPropiedad}
            onChange={(e) => setIdPropiedad(e.target.value)}
            required>

            <option value="">...</option>
            {propiedades.map((propiedad) => (
            <option key={propiedad.tipo} value={propiedad.id}>
                {propiedad.tipo}
            </option>
            ))}
        </select>
    </>
  );
}

export default SeleccionarPropiedad;
