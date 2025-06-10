import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FILTERS = ['ALL', 'ACTIVE', 'COMPLETED'];

function Filter({ filterStatus, setFilterStatus }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectFilter = (value) => {
    setFilterStatus(value);
    setIsOpen(false);
  }

  return (
    <div className="relative h-[34px] w-[150px] text-sm font-medium">
      <div
        className="flex items-center justify-between bg-accent text-white w-full h-full px-3 py-1 rounded shadow-sm cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-sm w-full border-r mr-2">{filterStatus}</span>
        {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
      </div>

      {isOpen && (
        <div className="absolute z-10 top-[120%] left-0 w-full bg-white shadow-md rounded-sm border border-accent overflow-hidden transition-all duration-200">
          {FILTERS.map((option) => (
            <div
              key={option}
              onClick={() => selectFilter(option)}
              className={`px-3 py-2 cursor-pointer text-accent hover:bg-accent hover:text-white ${
                filterStatus === option ? 'font-bold bg-accent text-white' : ''
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Filter;