import { BrowserRouter,Routes, Route } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import KnowledgeHub from "../pages/KnowledgeHub"
import SparesPage from "../pages/Sparesandservices"
import CommercialRoPage from "../pages/Commercialro"
import Domesticro from "../pages/Domesticro"
import Industrialro from "../pages/Industrialro"



const route = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/knowledgehub" element={<KnowledgeHub/>}/>
            <Route path="/sparesandservices" element={<SparesPage/>} />
            <Route path="/commercialro" element={<CommercialRoPage/>} />
            <Route path="/domesticro" element={<Domesticro />} />
            <Route path='/industrialro' element={<Industrialro/>} />
        </Routes>
   </BrowserRouter>
  )
}

export default route
