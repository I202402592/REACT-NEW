import React from "react";
import alfombra1 from './Imagenes/alfombra1.jpg';
import alfombra2 from './Imagenes/alfombra2.jpg';
import alfombra3 from './Imagenes/alfombra3.jpg';
function Imagen() {
    return (
        <>
    <img alt = "Cabecera1" src ={alfombra1} className ="imgcab1"/>
    <img alt = "Cabecera2" src ={alfombra2} className ="imgcab2"/>
    <img alt = "Cabecera3" src ={alfombra3} className ="imgcab3"/>
    </>
    );
    }
    export default Imagen;
    
    