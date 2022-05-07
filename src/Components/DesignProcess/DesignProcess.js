import React, { useEffect } from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import { FaPeopleArrows,FaTabletAlt,FaLaptopCode,FaRocket,FaCogs ,FaSearch,FaCcMastercard ,FaArrowRight} from 'react-icons/fa';
import './DesignProcess.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import {IconContext} from "react-icons";


const DesignProcess = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <div>
      <h2 className='about'>Our Website Design Process</h2>
      <p>Our Comprehensive Website Design Strategy Ensures a Perfectly Crafted Website For Your Business</p>
    </div>
    <section>
      <Container data-aos='fade-up' >
        <Row>
        <IconContext.Provider value={{ className:"myReact-icons"}}>
       
          <Col md={2} >
         <FaPeopleArrows color={'green'} size={'3rem'}/> <p>Project Initiation</p>
          </Col>
          <Col md={2}>
          <FaArrowRight/><FaTabletAlt color={'green'} size={'3rem'}  /> <p>Conceptualization</p>
          </Col>
          <Col md={2}>
          <FaArrowRight/><FaCcMastercard color={'green'} size={'3rem'}/> <p>Designing</p>
          </Col>
          <Col md={2}>
          <FaArrowRight/><FaLaptopCode color={'green'} size={'3rem'}/> <p>Development</p>
          </Col>
        <Col md={2}>
        <FaArrowRight/><FaCogs color={'green'} size={'3rem'}/> <p>Beta Launch</p>
          </Col>
          <Col md={1}>
          <FaArrowRight/><FaSearch color={'green'} size={'3rem'}/> <p>Testing</p>
          </Col>
          <Col md={1}>
          <FaArrowRight className='arrow'/><FaRocket color={'green'} size={'3rem'}/> <p>Final Launch</p>
          </Col>
          </IconContext.Provider>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default DesignProcess