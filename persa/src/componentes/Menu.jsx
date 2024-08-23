// Importar las librerías de React
import React from "react";
// Crear un arreglo con los nombres del menú
const nombres = ['Liquidación', 'Oriental', 'Modernas','Exterior', 'Contáctenos'];
// Recorre el arreglo de nombres (método map) para crear los elementos del menú
const ítems = nombres.map((x) => <a href='#' className = 'item'> {x} </a>);
// Crea un componente funcional para el menú
function Menu() {
return (
<div className="bloque">
{ítems}
</div>
);
}
// Exporta el componente a utilizar en el archivo Principal (App.js)
export default Menu;
