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
      group: state.group,
      id: null,
    };

    if (vsExprReg.test(request.group)) {
      // document.querySelector(".alertTask").innerHTML = "";
      fetch(HOST_API + "/categoria", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((category) => {
          dispatch({ type: "add-category", item: category });
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
      <form ref={formRef}>
        <input
          type="text"
          name="name"
          className="form-control me-2"
          placeholder="Escribe la nueva categoria"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, group: event.target.value });
          }}
        />
        <button
          className="btn btn-success"
          onClick={onAdd}
          disabled={!state.group}
        >
          Nueva Categoria
        </button>
      </form>
    </div>
  );
};

export default FormCrearCategoria;
