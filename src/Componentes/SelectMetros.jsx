import { useContext } from 'react';
import { DataContext } from '../DataContext.jsx';

function SeleccionarMetros(){
    const {metros, setMetros} = useContext(DataContext);
    return(
        <>
        <div>
            <label>Seleccione los metros cuadrados</label> 
        </div>        
        <input value={metros} onChange={e =>  setMetros(e.target.value)} 
            className="input-group-text" type="number" 
            id="inp_metros" min="20" max="500" required/> 
        </>
    )    
}
export default SeleccionarMetros