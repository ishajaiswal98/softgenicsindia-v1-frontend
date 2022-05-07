import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Iframe from 'react-iframe'
import './OfficeAddress.css'

const OfficeAddress = () => {
  return (
    <div className='testimonial-container'>

<Container fluid style={{backgroundColor:'#f6feff', padding:'4rem'}} className='ofc'>
            <Row>
                 <Col md={6}>
                     <Container >
                        <h2 >OUR OFFICE</h2>
                        <div className='img'>
                           <img src='images/office.png' className='ofc-img' alt='img'></img>
                          </div>    
                          <div>
                            <h3> Patna-Bihar</h3>
                            <p>SoftGenics India Private Limited</p>
                            <p>Budhha Shubhash Enclave, <br/>New Jaganpura, Patna, Bihar 800027</p>
                            </div>                                     
                     </Container>
                </Col>
                <Col md={6}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.3004677842687!2d85.14041301474305!3d25.594930083712768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a79cbfcdfad3%3A0xff414c58b11be6e1!2sSoftGenics%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1649737484452!5m2!1sen!2sin"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OfficeAddress