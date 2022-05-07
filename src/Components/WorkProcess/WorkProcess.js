import React , {useEffect} from 'react'
import { Container,Row,Col, Card } from 'react-bootstrap'
import './WorkProcess.css'
import Aos from 'aos'
import "aos/dist/aos.css";


const WorkProcess = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <div className='work-cont testimonial-container'> 
      <h2 className='about'>How We Work</h2>
      <Container>
        <Row>
          <Col md={4}>
          <Card data-aos="flip-down"  border='primary'  raised style={{  height:'350px' , background: '#C19434',
}}>
  <Card.Img variant="top" src="images/coffee.png" style={{width:'5rem' ,marginLeft:'35%'}} />
  <Card.Body>
    <Card.Title>1- Discuss On Coffee</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
          </Col>
          <Col md={4}  style={{ paddingLeft: '2%', marginRight:'0' }}>
          <Card data-aos="flip-up" border='primary' style={{  height:'350px', background: '#C19434',
}}>
  <Card.Img variant="top" src="images/plan.png"  style={{width:'5rem' ,marginLeft:'35%'}}/>
  <Card.Body>
    <Card.Title>2- Planning & Development</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
          </Col>
          <Col md={4}  >
          <Card data-aos="flip-down"  border='primary' style={{ height:'350px' , background: '#C19434',
 }}>
  <Card.Img variant="top" src="images/launch.png"  style={{width:'5rem' ,marginLeft:'35%'}} />
  <Card.Body>
    <Card.Title>3- Testing & Deliver</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
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

export default WorkProcess