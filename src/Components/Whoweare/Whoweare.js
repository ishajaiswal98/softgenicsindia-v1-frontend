import React from 'react'
import './whoweare.css'
import {Container , Col , Row} from 'react-bootstrap'
import {Animated} from "react-animated-css";

const Whoweare = () => {
  return (
    <>
 
    <div className='overlay testimonial-container' id='about' >
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
     <h2 className='about'>Who We Are </h2>
     </Animated>
    </div>
    
    <div>
      <Container>
        <Row>
          <Col md={8}>
      <p><strong>W</strong>e are one of the most experienced and <br/>
       trusted Website Design & Website Development Company in Patna Bihar,
       <br/> our motive is to deliver websites that are compatible with all 
       <br/>the output devices for a smooth browsing experience anytime and anywhere at minimum cost.<br/>

Web design company Softgenic  built websites are uniquely 
<br/>custom designed with quality content, elegant UI&UX, bold typography,
<br/> intuitive navigation, SEO optimized and with arresting visuals. 
<br/>Customer engagement and clear communication of product USP’s are
<br/> primary goals SOFTGENICS INDIA Soft designed websites.

We design <br/>websites with a purpose. Appealing aesthetics, efficient and feature rich.</p>
</Col>
<Col md={4}>
 <img src='images/wh.png' alt='#'></img>
</Col> 
</Row>
  </Container>
    </div>
    </>
  )
}

export default Whoweare