import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import Login from "./Components/Login"
import Profile from "./Components/Profile"

function App() {
 

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>} > 
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>

        </Routes>
      </BrowserRouter>

      {/* <Navbar/>
      <h1 className="font-bold text-2xl">Hello world</h1> */}
    </>
  )
}

export default App
