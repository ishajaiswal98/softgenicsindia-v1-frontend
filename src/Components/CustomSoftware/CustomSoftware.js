import React, { useEffect } from 'react'
import { Container,Row ,Col } from 'react-bootstrap'
import './CustomSoftware.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const CustomSoftware = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <div id='tech'>
      <h2 className='about'>Our Customize Software</h2>
    </div>
    <Container data-aos="flip-up">
      <Row className='tech-row'>
        <Col md={3} >
        <img src='images/h.png' alt='' className='imgage' ></img>
        <h5>HTML</h5>
        </Col>
        <Col md={3}>
        <img src='images/c.png' alt='' className='imgage'></img>
        <h5>CSS</h5>
        </Col>
        <Col md={3}>
        <img src='images/JS.png' alt='' className='imgage'></img>
        <h5>JavaScript</h5>
        </Col>
        <Col md={3}>
        <img src='images/J.png' alt='' className='imgage'></img>
        <h5>JAVA</h5>
        </Col>
      </Row>

      <Row className='tech-row'>
        <Col md={3} >
        <img src='images/r.png' alt='' className='imgage'></img>
        <h5>REACT</h5>
        </Col>
        <Col md={3}>
        <img src='images/rd.png' alt='' className='imgage'></img>
        <h5>REDUX</h5>
        </Col>
        <Col md={3}>
        <img src='images/node.png' alt='' className='imgage'></img>
        <h5>NODE</h5>
        </Col>
        <Col md={3}>
        <img src='images/ex.png' alt='' className='imgage'></img>
        <h5>EXPRESS</h5>
        </Col>
      </Row>

      <Row className='tech-row'>
        <Col md={3} >
        <img src='images/md.png' alt='' className='imgage'></img>
        <h5>MONGODB</h5>
        </Col>
        <Col md={3}>
        <img src='images/ms.png' alt='' className='imgage'></img>
        <h5>MYSQL</h5>
        </Col>
        <Col md={3}>
        <img src='images/wp.png' alt='' className='imgage'></img>
        <h5>WORDPRESS</h5>
        </Col>
        <Col md={3}>
        <img src='images/dp.png' alt='' className='imgage'></img>
        <h5>DRUPAL</h5>
        </Col>
      </Row>

      <Row>
        <Col md={3} >
        <img src='images/nt.png' alt='' className='imgage'></img>
        <h5>NEXT</h5>
        </Col>
        <Col md={3}>
        <img src='images/a.png' alt='' className='imgage'></img>
        <h5>ANGULAR</h5>
        </Col>
        <Col md={3}>
        <img src='images/php.png' alt='' className='imgage'></img>
        <h5>PHP</h5>
        </Col>
        <Col md={3}>
        <img src='images/py.png' alt='' className='imgage'></img>
        <h5>PYTHON</h5>
        </Col>
      </Row>




    </Container>
    </>
  )
}

export default CustomSoftware