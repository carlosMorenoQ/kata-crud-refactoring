import React, { useContext, useEffect } from "react";
import Store from "../../comunes/Store";
import HOST_API from "../../comunes/conexion";
import ListaTodo from "../VistaPorCategoria/ListaTodo";
import FormPorCategoria from "../VistaPorCategoria/FormPorCategoria";

const ListaCategorias = () => {
  const {
    dispatch,
    state: { categoria, todo },
  } = useContext(Store);

  const currentList = categoria.categoriaList;
  const currentTodo = todo.list;

  useEffect(() => {
    fetch(HOST_API + "/categoriaList")
      .then((response) => response.json())
      .then((category) => {
        dispatch({ type: "update-category", category });
      });
  }, [dispatch]);

  const onDeleteTask = (id) => {
    currentTodo.forEach((item) => {
      if (item.group === id) {
        fetch(HOST_API + "/" + item.id + "/categoria", {
          method: "DELETE",
        }).then((categoriaList) => {
          dispatch({ type: "delete-item", id });
        });
      }
    });

    fetch(HOST_API + "/" + id + "/categoria", {
      method: "DELETE",
    }).then((categoryList) => {
      dispatch({ type: "delete-category", id });
    });
  };

  return (
    <div>
      {currentList.map((item) => {
          return (
            <div className="col" key={item.id}>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDeleteTask(item.id)}
              >
                Eliminar categoria
              </button>
              <h3 className="title">{item.group}</h3>
              <FormPorCategoria CrearCategoriaId={item.id} />
              <ListaTodo categoriaListId={item.id} />
            </div>
          );
      })}
    </div>
  );
};

export default ListaCategorias;
