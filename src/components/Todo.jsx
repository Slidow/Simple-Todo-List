import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

function Todo({ todo, setTodos, index, length }) {

  const changeStatus = (id) => {
    setTodos(prev => (
      prev.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
    ))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div className={`flex items-center gap-2 pb-3 ${index !== length - 1 ? 'border-b' : ''} border-accent`}>
      {todo.done 
        ? <MdCheckBox 
            className="text-accent cursor-pointer" 
            size={27} 
            onClick={() => changeStatus(todo.id)} 
          /> 
        : <MdOutlineCheckBoxOutlineBlank 
            className="text-accent cursor-pointer" 
            size={27} 
            onClick={() => changeStatus(todo.id)} 
          />
      }
      <span 
        className={`flex-1 text-lg dark:text-white font-semibold ${todo.done && 'text-secondary line-through'}`}
      >
        {todo.text}
      </span>
      <div 
        className="text-red-500 hover:text-red-400 p-1 rounded-full cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        <FaTrash />
      </div>
    </div>
  )
}

export default Todo;