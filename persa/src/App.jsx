import React from "react";
import Titulo from './componentes/Titulo';
import './App.css'
import Menu from './componentes/Menu';
import Carrusel from './componentes/Carrusel';

function App(){
  return(
<>
<div>
<Titulo/>
</div>
<div>
<Menu/>
</div>
<div className="Carro">
<Carrusel/>
</div>
</>
  );
}

export default App;