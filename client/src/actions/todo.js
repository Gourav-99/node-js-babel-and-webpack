import axios from "axios";

export const getTodos = () => async (dispatch) => {
  try {
    const {
      data: { data: todos },
    } = await axios.get("/todos/getTodos");

    dispatch({ type: "GET_TODOS", payload: todos });
  } catch (error) {
    console.log(error);
  }
};
export const addTodo = (title) => async (dispatch) => {
  try {
    const {
      data: { data: todos },
    } = await axios.post("/todos/createTodo", {
      title: title,
    });

    dispatch({ type: "ADD_TODO", payload: todos });
  } catch (error) {
    console.log(error);
  }
};

export const handleComplete = (isComplete, id) => async (dispatch) => {
  try {
    const {
      data: { data: updateTodo },
    } = await axios.patch(`/todos/${id}`, {
      isComplete: !isComplete,
    });
    console.log(updateTodo, "patch resquest");
    dispatch({ type: "IS_COMPLETE", payload: updateTodo });
  } catch (error) {
    console.log(error);
  }
};
export const handleDelete = (id) => async (dispatch) => {
  try {
    const {
      data: { data: todos },
    } = await axios.delete(`/todos/${id}`);
    console.log(todos, "del");
    dispatch({ type: "DELETE_TODO", payload: todos });
  } catch (error) {
    console.log(error);
  }
};

export const editTodo = (title, id) => async (dispatch) => {
  try {
    const {
      data: { data: editedTodo },
    } = await axios.patch(`/todos/${id}`, { title: title });
    console.log(editedTodo, "edited");
    dispatch({ type: "EDIT_TODO", payload: editedTodo });
  } catch (error) {
    console.log(error);
  }
};
