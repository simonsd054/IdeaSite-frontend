import Navbar from "./components/custom/Navbar"
import { Outlet } from "react-router"

function App() {
  return (
    <div className="wrapper-grid mb-10">
      <header className="grid-area-header">
        <Navbar />
      </header>
      <main className="grid-area-body">
        <Outlet />
      </main>
    </div>
  )
}

export default App
