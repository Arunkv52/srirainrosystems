import BestSellers from "../components/section/home/BestSellers"
import Herosection from "../components/section/home/Herosection"
import MemberBenefits from "../components/section/home/MemberBenefits"
import ServiceMaintenance from "../components/section/home/ServiceMaintanence"
import SparesShowcase from "../components/section/home/SpareShowcase"
import Whychooseus from "../components/section/home/Whychooseus"
import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"

const Home = () => {
  return (
    <>
       <main>
            <Navbar />
            <Herosection />
            <BestSellers />
            <SparesShowcase />
            <ServiceMaintenance />
            <Whychooseus/>
            <MemberBenefits/>
            <Footer />
       </main>
    </>
  )
}

export default Home