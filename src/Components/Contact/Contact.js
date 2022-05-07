import React , {useEffect} from 'react'
import { Form,Row, Col ,Container, Button} from 'react-bootstrap'
import './Contact.css'
import Aos from 'aos'
import emailjs from 'emailjs-com'
import "aos/dist/aos.css";

const Contact = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_fp7z7mo','template_viw4y6p', e.target,'BBpoc0ny8sx1SsIeY'
    
    ).then(res=>{
        console.log(res);
        alert("Thank you contact us we will reply you soon")
    }).catch(err=> console.log)
}
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <div className='form-div' id='contact' >
         <h2 className='about'>Contact Us Now</h2>
         <Container data-aos="slide-left">
              <Row>
                   <Col md={6}>
           <Form className='form-cont' onSubmit={sendEmail}>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
    <Form.Label column sm={2}>
      Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="enter your name" name="name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="Email" placeholder="Email" name="email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoneNumber">
    <Form.Label column sm={2}>
      Contact
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="MobileNumber" placeholder="Contact number" name="phone" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalTextArea1">
    <Form.Label column sm={2}>
      Your business
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Describe your business here..."  name="business" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" className='btn-submit'>Contact Now</Button>
    </Col>
  </Form.Group>
  </Form>
  </Col>
  <Col md={6}>
   <img src='images/contact.png' alt=' ' className='contact-image'></img>
  </Col>
  </Row>
  </Container>
  </div>

    </>
  )
}

export default Contact