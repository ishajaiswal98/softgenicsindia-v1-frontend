import React from 'react'
import Contact from '../Contact/Contact'
import CustomSoftware from '../CustomSoftware/CustomSoftware'
import DesignandDevProcess from '../DesignandDevServices/DesignandDevServices'
import DesignProcess from '../DesignProcess/DesignProcess'
import Faq from '../Faq/Faq'
import Header from '../Header/Header'
import HerosSection from '../HerosSection/HerosSection'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import OurLatestWork from '../OurLatestWork/OurLatestWork'
import PriceTable from '../PriceTable/PriceTable'
import Reviews from '../Reviews/Reviews'
import Whoweare from '../Whoweare/Whoweare'
import WhyChoose from '../WhyChoose/WhyChoose'
import WorkProcess from '../WorkProcess/WorkProcess'
import Footer from '../Footer/Footer'
import OfficeAddress from '../OfficeAddress/OfficeAddress'
import FloatingWhatsapp from '../FloatingWhatsapp'


const Home = () => {
  
  return (
    <div>
        <Header />
        <NavbarMenu />
        <HerosSection/> 
         <Whoweare />
        <DesignandDevProcess/>
        <DesignProcess/>
        <WorkProcess/>
        <OurLatestWork/>
        <CustomSoftware/>
        <WhyChoose/>
        <Faq/>
        <PriceTable/>
        <Contact/>
        <Reviews/>
        <OfficeAddress/>
        <FloatingWhatsapp/>
        <Footer/>

    </div>
  )
}

export default Home