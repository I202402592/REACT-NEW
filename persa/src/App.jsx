import React from "react";
import Titulo from './componentes/Titulo';
import './App.css'
import Menu from './componentes/Menu';
import Carrusel from './componentes/Carrusel';
import Alfombras from './componentes/Alfombras';
import Redes from './componentes/Redes';

function App(){
  return(
<>
<div className="titulo">
<Titulo/>
</div>
<div className="menu">
<Menu/>
</div>
<div className="Carro">
<Carrusel/>
</div>
<div className="alfombras">
  <Alfombras/>
</div>
<div className="redes">
  <Redes/>
</div>
</>
  );
}

export default App;