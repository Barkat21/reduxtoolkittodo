import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  return (
    <>
      <h1 className="text-dark-bold">TODO APP</h1>
      <AddTodo
        isUpdate={isUpdate}
        setUpdate={setIsUpdate}
        input={input}
        setInput={setInput}
        id={id}
        setId={setId}
        toast={toast}
      />
      <Todos
        isUpdate={isUpdate}
        setUpdate={setIsUpdate}
        setInput={setInput}
        id={id}
        setId={setId}
        toast={toast}
      />
      <ToastContainer autoClose={250} />
    </>
  );
}

export default App;
