import { BrowserRouter,Routes, Route } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import KnowledgeHub from "../pages/KnowledgeHub"
import SparesPage from "../pages/Sparesandservices"
import CommercialRoPage from "../pages/Commercialro"
import Domesticro from "../pages/Domesticro"
import Industrialro from "../pages/Industrialro"
import WaterSofteners from "../pages/WaterSofteners"
import TermsPage from "../pages/Termspage"
import PrivacyPolicyPage from "../pages/Privacypolicypage"
import SimpleBlogPost from "../components/section/knowledgehub/SimpleBlogPost"
import TdsBlogPost from "../components/section/knowledgehub/TdsBlogPost"



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
            <Route path="/watersofteners" element={<WaterSofteners />} />
            <Route path="/termsandconditions" element={<TermsPage/>} />
            <Route path="/privacypolicy" element={<PrivacyPolicyPage/>} />
            <Route path="/SimpleBlogPost" element={<SimpleBlogPost />} />
            <Route path="/tdsreading" element ={<TdsBlogPost/>} />
        </Routes>
   </BrowserRouter>
  )
}

export default route
