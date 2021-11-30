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
    fetch(HOST_API + "/categoryList")
      .then((response) => response.json())
      .then((categoria) => {
        dispatch({ type: "update-category", categoria });
      });
  }, [dispatch]);

  const onDeleteTask = (id) => {
    currentTodo.forEach((item) => {
      if (item.idList === id) {
        fetch(HOST_API + "/" + item.id + "/category", {
          method: "DELETE",
        }).then((todoList) => {
          dispatch({ type: "delete-item", id });
        });
      }
    });
    fetch(HOST_API + "/" + id + "/category", {
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
            <div className="card">
              <div className="card-header">
                <div className="row text-center">
                  <div className="col-12 del">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => onDeleteTask(item.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-12">
                    <h3 className="title">{item.name}</h3>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-12">
                    <FormPorCategoria TaskListId={item.id} />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ListaTodo TaskListId={item.id} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListaCategorias;
