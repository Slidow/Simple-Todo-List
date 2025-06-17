import { CiSearch } from "react-icons/ci";
import { useRef } from "react";

function SearchInput({ searchQuery, setSearchQuery }) {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div className="flex flex-1 w-full items-center gap-3 border border-accent dark:border-white rounded-sm px-3 py-1">
      <input
        ref={inputRef}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full outline-none placeholder-accent/35 dark:placeholder-white/35 dark:text-white"
        placeholder="Search note..."
      />
      <CiSearch 
        size={22} 
        className="text-accent dark:text-white cursor-pointer"
        onClick={focusInput}
      />
    </div>
  )
}

export default SearchInput;