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
    <div className={`flex items-start gap-2 pb-3 ${index !== length - 1 ? 'border-b' : ''} border-accent`}>
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
      <div className="flex-1 min-w-0">
        <span 
          className={`text-lg dark:text-white font-semibold break-words whitespace-normal ${todo.done && 'text-secondary line-through'}`}
        >
          {todo.text}
        </span>
      </div>
      <div 
        className="text-red-500 hover:text-red-400 p-1 rounded-full cursor-pointer shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        <FaTrash />
      </div>
    </div>
  )
}

export default Todo;