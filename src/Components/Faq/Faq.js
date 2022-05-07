import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faq = () => {
  return (
    <div style={{margin:'5rem'}} className='faq-con'>
        <h2 className='about'>FAQs: Web Design & Development</h2>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>How Much Do You Charge for Web Design?</Accordion.Header>
    <Accordion.Body>
    Our website design packages can be tailored to meet the needs of small and large businesses alike. If you’re not sure which package to choose or need a custom quote, please get in touch.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Do you provideb Support services after the website development is complete?</Accordion.Header>
    <Accordion.Body>
    Yes, we provide free website maintenance for 1 month after the project is complete. This includes Adding, Deleting, and Modifying text only.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Do I have to host my website with you?</Accordion.Header>
    <Accordion.Body>
    No, you do not need to host your website with us. We are open to designing a website from scratch or redesigning an existing website.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Are you websites SEO friendly?</Accordion.Header>
    <Accordion.Body>
    Our websites are technically-sound, responsive, and have a great user experience. They are SEO friendly and will include SEO tools implementation. However, for advanced SEO services such as keyword research, content optimization, and others - please sign up for our SEO services.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  )
}

export default Faq