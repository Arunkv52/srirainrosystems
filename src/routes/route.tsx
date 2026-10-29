import { BrowserRouter,Routes, Route } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"



const route = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>

        </Routes>
   </BrowserRouter>
  )
}

export default route
