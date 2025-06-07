import { CiSearch } from "react-icons/ci";
import { useRef } from "react";

function SearchInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div className="flex flex-1 items-center gap-3 border border-accent rounded-sm px-3 py-1">
      <input
        ref={inputRef}
        className="w-full outline-none placeholder-accent/35"
        placeholder="Search note..."
      />
      <CiSearch 
        size={22} 
        className="text-accent cursor-pointer"
        onClick={focusInput}
      />
    </div>
  )
}

export default SearchInput;