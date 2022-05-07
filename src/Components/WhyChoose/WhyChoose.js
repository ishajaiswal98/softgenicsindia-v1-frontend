import React, {useEffect} from 'react'
import { Container , Row ,Col} from 'react-bootstrap'
import './WhyChoose.css'
import Aos from 'aos'
import "aos/dist/aos.css";

const WhyChoose = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>  
      <div className='testimonial-container'>
        <h2 className='about' >Why Choose SoftGenics</h2>
      </div>
      <Container data-aos="flip-left">
        <Row className='why-chos'>
          <Col md={7} className='p-cont'>
          <p className='para'><strong>S</strong>oftGenics is one of the most affordable, <br/>
          low cost website design company offering
          <br/> best services with reasonable price .<br/>
           We have great expertise and vast experience in
           <br/> the field 
           Website and Mobile Application Development .</p>
          </Col>
          <Col md={5}>
            <img src='images/soft1.jpg' alt='img' style={{width:'300px' , height:'300px'}}></img>
          </Col>
        </Row>
      </Container>
      
    </>

  )
}

export default WhyChoose