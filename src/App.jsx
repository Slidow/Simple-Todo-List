import { useState } from "react";
import Filter from "./components/Filter"
import SearchInput from "./components/SearchInput"
import ThemeToggle from "./components/ThemeToggle"
import Todo from "./components/Todo";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="p-12 relative max-w-[1000px] mx-auto min-h-screen">
      <h1 className="text-primary text-2xl text-center mb-5">TODO LIST</h1>

      <div className="flex items-center gap-5 mb-9">
        <SearchInput />
        <Filter />
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-5 md:px-25">
        {todos.length !== 0 ? todos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} />
        )) : <span className="font-semibold text-center">Add new Todos for the day!</span>}
      </div>
      
      <div className="absolute right-12 bottom-6 bg-accent rounded-full p-2 text-white cursor-pointer">
        <AiOutlinePlus size={24} />
      </div>
    </div>
  )
}

export default App
