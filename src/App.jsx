import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Card from "./components/Card"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Card />}></Route>
      </Routes>
    </>
  )
}

export default App
