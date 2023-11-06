import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [form, setForm] = useState({});
  const [metros, setMetros] = useState([]);
  const [idPropiedad, setIdPropiedad] = useState([]);  
  const [idUbicacion, setIdUbicacion] = useState([]);  
  const [cotizacion, setCotizacion] = useState([]);
  const [propiedades, setPropiedades] = useState([]);  
  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((response) => response.json())
      .then((resul) => setPropiedades(resul));
  }, []);

  

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
      .then((response) => response.json())
      .then((resul) => setUbicaciones(resul));
  }, []);

  const data = { propiedades, form, setForm, ubicaciones, metros, setMetros, 
    idPropiedad, setIdPropiedad, idUbicacion, setIdUbicacion,
    cotizacion, setCotizacion };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

