import React, { useRef, useContext, useState } from "react";
import HOST_API from "../../comunes/conexion";
import Store from "../../comunes/Store";

const FormCrearCategoria = () => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { categoria },
  } = useContext(Store);
  const item = categoria.item;
  const [state, setState] = useState(item);
  const vsExprReg = /[A-Za-z0-9_]/;

  const onAdd = (event) => {
    event.preventDefault();

		const request = {
			name: state.name,
			id: null,
		};

    if (vsExprReg.test(request.name)) {
      document.querySelector(".alertTask").innerHTML = "";
      fetch(HOST_API + "/category", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((category) => {
          dispatch({ type: "add-category", item: categoria });
          setState({ name: "" });
          formRef.current.reset();
        });
    } else {
      document.querySelector(".alertTask").innerHTML =
        "Solo utilice caracteres Alfanuméricos";
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        className="form-control me-2"
        placeholder="Escriba aqui..."
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value });
        }}
      />
      <button
        className="btn btn-success"
        onClick={onAdd}
        disabled={!state.name}
      >
        Nueva Lista
      </button>
    </div>
  );
};

export default FormCrearCategoria;
