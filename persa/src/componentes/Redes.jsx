import React from "react";
import facebook from './Imagenes/facebook.png';
import whatsapp from './Imagenes/whatsApp.png';
import x from './Imagenes/x.png';

function Imagen() {
    return (
        <>
    <img alt = "Cabecera1" src ={facebook} className ="imgcab1"/>
    <img alt = "Cabecera2" src ={whatsapp} className ="imgcab2"/>
    <img alt = "Cabecera3" src ={x} className ="imgcab3"/>
    </>
    );
    }
    export default Imagen;