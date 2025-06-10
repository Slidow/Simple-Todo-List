import { useEffect, useState } from "react";
import Filter from "./components/Filter"
import SearchInput from "./components/SearchInput"
import ThemeToggle from "./components/ThemeToggle"
import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [visibleTodos, setVisibleTodos] = useState(todos);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let filtered = todos;

    if (filterStatus !== 'ALL') {
      if (filterStatus === 'ACTIVE') {
        filtered = filtered.filter(todo => todo.done === false);
      }
      if (filterStatus === 'COMPLETED') {
        filtered = filtered.filter(todo => todo.done === true);
      }
    }

    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(todo => todo.text.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setVisibleTodos(filtered);
  }, [todos, searchQuery, filterStatus])
  

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} flex justify-center dark:bg-[#252525]`}>
      <div className="flex-1 p-12 relative max-w-[1000px] min-h-screen">
        <h1 className="text-primary text-2xl text-center mb-5 dark:text-white">TODO LIST</h1>

        <div className="flex items-center gap-5 mb-9">
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <div className="flex flex-col gap-5 md:px-25">
          {visibleTodos.length !== 0 ? visibleTodos.map((todo) => (
            <Todo todo={todo} setTodos={setTodos} />
          )) : <span className="font-semibold text-center dark:text-white">Empty</span>}
        </div>
        
        <NewTodo setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
