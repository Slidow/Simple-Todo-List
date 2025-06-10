import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function NewTodo({ setTodos }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [note, setNote] = useState("");
  const [nextId, setNextId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prev) => [...prev, {
      id: nextId,
      text: note,
      done: false
    }])

    setIsOverlayOpen(false);
    setNextId(nextId + 1);
    setNote("");
  }

  const handleCancel = () => {
    setIsOverlayOpen(!isOverlayOpen)
    setNote("");
  }
  
  return (
    <> 
      <div 
        className="absolute right-12 bottom-6 bg-accent rounded-full p-2 text-white cursor-pointer"
        onClick={() => setIsOverlayOpen(!isOverlayOpen)}
      >
        <AiOutlinePlus size={24} />
      </div>

      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white dark:bg-[#252525] dark:border dark:border-white rounded-xl px-4 py-3 w-full max-w-[400px]">
            <h1 className="font-bold text-center mb-3 dark:text-white">NEW NOTE</h1>
            <form onSubmit={handleSubmit}>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="outline-none w-full border border-accent dark:border-white dark:placeholder-white/30 rounded-sm px-2 py-1 mb-20 dark:text-white"
                placeholder="Input your note..." 
              />
              <div className="flex items-center justify-between">
                <button
                  className="text-accent border border-accent rounded-sm font-semibold py-1 text-sm w-[90px] cursor-pointer"
                  onClick={handleCancel}
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="text-white border border-accent bg-accent rounded-sm font-semibold py-1 text-sm w-[90px] cursor-pointer"
                >
                  APPLY
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default NewTodo;