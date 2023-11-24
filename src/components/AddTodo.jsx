import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({ isUpdate, setUpdate, input, setInput, id, toast }) {
  const dispatch = useDispatch();
  const showToastMessage = () => {
    toast.success("Todo Added !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.length != "") {
      dispatch(addTodo(input));
      setInput("");
      showToastMessage();
    } else {
      toast.warning("Empty todo");
    }
  };

  const updateHandler = (e) => {
    console.log(input);
    console.log(id);
    setUpdate(false);
    const updatedTodo = {
      id: id,
      text: input,
    };
    if (input.length != "") {
      dispatch(updateTodo(updateTodo));
      setInput("");
      showToastMessage();
    } else {
      toast.warning("Empty todo");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value.trim())}
      />
      {isUpdate ? (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={updateHandler}
          onMouseEnter
        >
          Update
        </button>
      ) : (
        <button
          type="submit"
          onClick={addTodoHandler}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      )}
    </form>
  );
}

export default AddTodo;
