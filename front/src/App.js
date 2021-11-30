import React from "react";

import {StoreProvider} from "./comunes/Store"
import CrearCategoria from "./componentes/VistaPorCategoria/FormPorCategoria"
import ListaTodo from "./componentes/VistaPorCategoria/ListaTodo";
import FormCrearCategoria from "./componentes/CrearCategoria/FormCrearCategoria"
import ListaCategorias from "./componentes/CrearCategoria/ListaCategorias"

function App() {
  return (
    <StoreProvider>
      <h3>Dashboard To-Do List</h3>
      <FormCrearCategoria/>
      <ListaCategorias/>
    </StoreProvider>
  );
}

export default App;

/* <CrearCategoria />
<ListaTodo/> */