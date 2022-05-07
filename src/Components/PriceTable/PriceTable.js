import React , {useEffect} from 'react'
import {Container , Col , Row ,Card ,Button} from 'react-bootstrap'
import './Pricetable.css'
import Aos from 'aos'
import "aos/dist/aos.css";

const PriceTable = () => {
  useEffect(() =>{
    Aos.init({duration:2000});
      },[])
  return (
    <>
    <div className='testimonial-container' id='package'>
        <h2 className='about'>Price Table</h2>

    </div>
    <Container data-aos="flip-down" > 
      <Row className="package" >
        <Col md={4}>
        <Card  className='price-card'>
  <Card.Img variant="top" src="images/br.jpg" />
  <Card.Body>
    <Card.Title>Basic plan --- Rs. 15,000</Card.Title>
    <Card.Text>
    Free Domain Name<br/>
5 Pages Dynamic Website<br/>
Unlimited Images & Videos uploading features<br/>
Unlimited Trafic Control and space<br/>
SEO Ready Website<br/>
100% Responsive Website<br/>
Live Chat with Whatsapp Integration<br/>
Payment Gateway Integration<br/>
Social Media Integration<br/>
24*7 Support
    </Card.Text>
    <Button className='pay-now'>Pay Now</Button>
  </Card.Body>
</Card>
        </Col>
        <Col md={4}>
        <Card  className='price-card'>
  <Card.Img variant="top" src="images/sp.jpg" />
  <Card.Body>
    <Card.Title>Classic Plan --- Rs. 25,000</Card.Title>
    <Card.Text>
    + Business Email id<br/>
+ 10 Pages Dynamic Website<br/>
+ SSL Certificate<br/>
+ Mobile Friendly Website<br/>
Free Domain Name<br/>
Unlimited Images & Videos uploading features<br/>
Unlimited Trafic Control and space<br/>
SEO Ready Website<br/>
100% Responsive Website<br/>
Live Chat with Whatsapp Integration<br/>
Payment Gateway Integration<br/>
Social Media Integration<br/>
24*7 Support
    </Card.Text>
    <Button className='pay-now'>Pay Now</Button>
  </Card.Body>
</Card>
        </Col>
        <Col md={4}>
        <Card  className='price-card'>
  <Card.Img variant="top" src="images/gl.jpg" />
  <Card.Body>
    <Card.Title>Premium Plan --- Rs. 50,000</Card.Title>
    <Card.Text>
    + Multiple Business Email id<br/>
+ Unlimited Pages Dynamic Website<br/>
+ SSL Certificate<br/>
+ Mobile Friendly Website<br/>
+ Admin Panel to change contents in your Website<br/>
Free Domain Name<br/>
Unlimited Images & Videos uploading features<br/>
Unlimited Trafic Control and space<br/>
SEO Ready Website<br/>
100% Responsive Website<br/>
Live Chat with Whatsapp Integration<br/>
Payment Gateway Integration<br/>
Social Media Integration<br/>
24*7 Support
    </Card.Text>
    <Button className='pay-now'>pay Now</Button>
  </Card.Body>
</Card> 
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default PriceTable