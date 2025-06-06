import Filter from "./components/Filter"
import SearchInput from "./components/SearchInput"
import ThemeToggle from "./components/ThemeToggle"

function App() {

  return (
    <div className="p-12">
      <h1 className="text-primary text-2xl text-center mb-5">TODO LIST</h1>

      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center gap-5">
          <SearchInput />
          <Filter />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default App
