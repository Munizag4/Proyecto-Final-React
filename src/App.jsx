import React from "react";
import { DataProvider } from './DataContext.jsx';
import Formulario from "./Componentes/Formulario";
import Historial from "./Componentes/Historial";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
     <DataProvider>
      <Routes>
        <Route path="/" Component={Formulario}></Route>
        <Route path="/historial" Component={Historial}></Route>
      </Routes>
      
        
      </DataProvider>  
    </Router>    
    </>
  );
}

export default App;
