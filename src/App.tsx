import "./App.css";
import Input from "./components/Input";
import List from "./components/List/List";
import { useState, useEffect } from "react";
import { todo } from "./utils/types";
function App() {
  const [selectedTodos, setSelectedTodos] = useState("all");
  const [arrOfTodos, setArrOfTodos] = useState<todo[]>([
    {
      text: "Check this todo",
      done: false,
    },
    { text: "Add new todo", done: true },
  ]);
  const [shownTodos, setShownTodos] = useState<todo[]>(arrOfTodos);
  // const count = useCount(arrOfTodos);
  const [count, setCount] = useState(0);

  const handeSelectTodos = (type: string) => {
    const todos = [...arrOfTodos];
    if (type == "all") {
      setSelectedTodos("all");
      setShownTodos(todos);
    } else if (type == "active") {
      setSelectedTodos("active");
      const newTodos = todos.filter((t) => t.done == false);
      setShownTodos(newTodos);
    } else if (type == "comp") {
      setSelectedTodos("comp");
      const newTodos = todos.filter((t) => t.done == true);
      setShownTodos(newTodos);
    }
  };

  const handleDoneClick = (todo: todo) => {
    const index = arrOfTodos.indexOf(todo);
    if (index !== undefined) {
      const todos = [...arrOfTodos];
      const changedTodo = todos[index];
      changedTodo.done = !changedTodo.done;
      todos[index] = changedTodo;
      setArrOfTodos(todos);
    }
  };

  const handleClearComplited = () => {
    const todos = [...arrOfTodos];
    const newTodos = todos.filter((t) => t.done == false);
    setArrOfTodos(newTodos);
    setShownTodos(newTodos);
  };

  const handleCreateTodo = (text: string, e: React.FormEvent) => {
    e.preventDefault();
    const todos = [...arrOfTodos];
    const createdTodo = {
      text: text,
      done: false,
    };
    todos.unshift(createdTodo);
    setArrOfTodos(todos);
    setShownTodos(todos);
  };

  useEffect(() => {
    const countTasks = () => {
      setCount(arrOfTodos.filter((t) => t.done == false).length);
    };
    countTasks();
  }, [arrOfTodos]);

  return (
    <>
      <h1 className="font-thin">todos</h1>
      <div className="w-[500px] items-center flex flex-col">
        <Input handleCreateTodo={handleCreateTodo} />
        <List
          count={count}
          // arrOfTodos={arrOfTodos}
          selectedTodos={selectedTodos}
          shownTodos={shownTodos}
          handeSelectTodos={handeSelectTodos}
          // setSelectedTodos={setSelectedTodos}
          handleClearComplited={handleClearComplited}
          handleDoneClick={handleDoneClick}
        />
      </div>
    </>
  );
}

export default App;
