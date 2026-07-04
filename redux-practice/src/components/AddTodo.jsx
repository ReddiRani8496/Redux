import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    dispatch(addTodo({ text: inputValue }));
    setInputValue("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md p-2"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
