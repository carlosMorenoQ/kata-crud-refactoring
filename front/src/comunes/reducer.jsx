function reducer(state, action) {
  switch (action.type) {
    case "update-category":
      const categoryUpdateList = state.categoria.categoriaList;
      categoryUpdateList.categoriaList = action.category;
      return { ...state, categoria: categoryUpdateList };
    case "add-category":
      const newCategoryList = state.categoria.categoriaList;
      newCategoryList.push(action.item);
      return {
        ...state,
        categoria: { categoriaList: newCategoryList, item: {} },
      };
    case "delete-category":
      const categoryDeleteItem = state.categoria;
      const categoryListUpdate = categoryDeleteItem.categoriaList.filter((item) => {
        return item.id !== action.id;
      });
      categoryDeleteItem.categoriaList = categoryListUpdate;
      return { ...state, categoria: categoryDeleteItem };
    case "update-item":
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      todoUpItem.list = listUpdateEdit;
      todoUpItem.item = {};
      return { ...state, todo: todoUpItem };
    case "delete-item":
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      return { ...state, todo: todoUpDelete };
    case "update-list":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };
    case "edit-item":
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit };
    case "add-item":
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: { list: todoUp, item: {} } };
    default:
      return state;
  }
}

export default reducer;
