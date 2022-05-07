import React , {useEffect} from 'react'
import { Col, Container, Row ,Card} from 'react-bootstrap'
import './DesignandDevServices.css'
import Aos from 'aos'
import "aos/dist/aos.css"


const DesignandDevServices = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <div className='services-cont'id='design'>
    <div>
      <h2 className='about'>Our Design and Development Services</h2>
    </div>
    <Container >
      <Row>
        <Col md={3} mr-3>
        
        <Card data-aos="flip-up" style={{   height:'75%',borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/webdesign.png" className='services-img'/>
  <Card.Body>
    <Card.Title>Website Design & Development</Card.Title>
    <Card.Text>
    We design website for you and host that over the server so that your business can be easily approachable from any where any time and it gives your business exist over internet. so we think you must have your own website.
    </Card.Text>
  
  </Card.Body>
</Card>
        </Col>
        <Col md={3} className=''>
        <Card data-aos="flip-down"  style={{ height:'75%', borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/mob.png"  className='services-img'/>
  <Card.Body>
    <Card.Title>Mobile App Development</Card.Title>
    <Card.Text>
    Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices. Like web application development, mobile application development has its roots in more traditional software development.
    </Card.Text>
    
  </Card.Body>
</Card> 
        </Col>
        <Col md={3}>
        <Card data-aos="flip-up"  style={{  height:'75%', borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/host.png"  className='services-img'/>
  <Card.Body>
    <Card.Title>Web Hosting</Card.Title>
    <Card.Text>
    A web hosting service is a type of Internet hosting service that hosts websites for clients, i.e. it offers the facilities required for them to create and maintain a site and makes it accessible on the World Wide Web. Companies providing web hosting services are sometimes called web hosts.
    </Card.Text>
  
  </Card.Body>
</Card> 
        </Col>
        <Col md={3}>
        <Card data-aos="flip-down"  style={{ height:'75%', borderRadius:'0.6em' ,transition:'all ease 200ms',overFlow: 'hidden'
        , margin: '1em'
      ,  boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)' }} >
  <Card.Img variant="top" src="images/dm.png" className='services-img' />
  <Card.Body>
    <Card.Title>Digital Marketing Services</Card.Title>
    <Card.Text>
    Digital marketing services are professional services that help market or advertise your business online, like through search, social media, and paid channels. They focus solely on digital channels versus traditional marketing channels like print or television
    </Card.Text>
    
  </Card.Body>
</Card> 
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default DesignandDevServices