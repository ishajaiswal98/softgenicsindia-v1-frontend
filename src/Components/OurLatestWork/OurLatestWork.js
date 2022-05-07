import React, { useEffect } from 'react'
import {Container, Col , Row} from 'react-bootstrap'
import './OurLatestWork.css'
import Aos from 'aos'
import "aos/dist/aos.css";

const OurLatestWork = () => {
  useEffect(() =>{
Aos.init({duration:2000});
  },[])
  return (
    <>
    <div className='about testimonial-container'>
      <h2 className='about'>Our Latest Work</h2>
      </div>
      <Container data-aos="fade-down">
        <Row>
          <Col md={8}>
            <img data-aos="fade-up" src='images/work1.png' alt='#' className='work-img'></img>
          </Col>
          <Col md={4}>
            <p> <strong>Shree Durga Dental Clinic  has a well-equipped clinic with all the modern equipment. The clinic has separate waiting and consultation areas which allow enough space for patients to wait conveniently at the clinic</strong></p>
            <a href="https://sharp-swirles-a1a601.netlify.app/#service">https://sharp-swirles-a1a601.netlify.app/#service</a>
          </Col>
        
          </Row>
          <Row>
            <Col md={4}>
             
              <p><strong> Geneca Life Science is a manufacturer company with the industrial and NIC code of as per the official records.</strong></p>
              <a href='https://genecalifescience.netlify.app/#product'>https://genecalifescience.netlify.app/#product</a>           
            </Col>
          <Col md={8}>
          <img data-aos="slide-down" src='images/work2.png' alt='#' className='work-img'></img>
          </Col>
          </Row>
          <Row>
    
          <Col md={8}>
            <img  src='images/work3.png' alt='#' className='work-img'></img>
          </Col>
          <Col md={4}>
            <p> <strong>A major element to our competitive strength is our sales and distribution strategy anchored by our best-in-class sales team.

Our well established distribution network will ensure that our products are well delivered and displayed on time at every outlets.</strong></p>
            <a href="http://www.soroup.com/" >http://www.soroup.com/</a>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p> <strong>Shreeji Multispeciality Dental Clinic  is one of the leading businesses in the Dentists. Also known for Dentists, Dental Surgeons, Paedodontist Doctors, Orthodontist Doctors, Dental X Ray Centres, Root Canal Doctors, Endodontist Doctors, 24 Hours Dentists and much more.</strong></p>
            <a href="https://shreeji-multispeciality-dental-clinic.netlify.app/"> https://shreeji-multispeciality-dental-clinic.netlify.app/</a>
          </Col>
          <Col md={8}>
            <img  src='images/sh.png' alt='#' className='work-img img-fluid'></img>
          </Col>
        
          </Row>
          <Row>
          <Col md={8}>
            <img  src='images/mx.png' alt='#' className='work-img img-fluid'></img>
          </Col>
          <Col md={4}>
            <p> <strong>The Dental & Maxillofacial Clinic is a Dentistry Clinic in Gomtinagar, Lucknow. The clinic is visited by doctors like Dr. Hemant Gupta</strong></p>
            <a href='https://the-dental-maxillofacial-clinic.netlify.app/'>https://the-dental-maxillofacial-clinic.netlify.app/</a>
          </Col>
          </Row>
          <Row>
            <Col md={4}><p> <strong>We are a luxury home-services salon in Patna serving all your beauty needs from the comfort of your home. Golden Honey started in year 2015.</strong></p>
            <a href="http://www.goldenhoneysalon.com/">http://www.goldenhoneysalon.com/</a>
             </Col>
          <Col md={8}>
            <img  src='images/work4.png' alt='#' className='work-img img-fluid'></img>
          </Col>
        
          </Row>
      </Container>
    
    </>
  )
}

export default OurLatestWork