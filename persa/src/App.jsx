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
<div>
<Titulo/>
</div>
<div>
<Menu/>
</div>
<div className="Carro">
<Carrusel/>
</div>
<div>
  <Alfombras/>
</div>
<div>
  <Redes/>
</div>
</>
  );
}

export default App;