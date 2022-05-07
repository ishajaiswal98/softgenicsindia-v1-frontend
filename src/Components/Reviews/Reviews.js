import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card ,Container } from 'react-bootstrap';
import './Reviews.css'

const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <div>
     <Container className='review' fluid>'
    <h2><img src="images/google.png" alt='google' style={{width:'40px', height:'40px'}} /> REVIEWS & <span>RATING</span></h2>
    
    <div className='rating'>
    
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star-half' />
                    <span className='text-muted h4'>4.6/5</span>
                </div>
                <br></br>
    <Carousel responsive={responsive}>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> priyanka Kumari <img src="/images/google.png" alt='google' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> Great Place to work....   😊</Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> prashant shrivastav <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>We thank Softgenics India Private Limited for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future. </Card.Text>

            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Sweta Bharti <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>Very nice work Location.Good bonding with teammates </Card.Text>
                <br></br>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Isha Jaiswal <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>Softgenics India pvt Ltd  is best website design company in patna. They create website and software for  business. Great experience with this company. I recommend this company to everyone for website designing. </Card.Text>
            </Card>
        </div>
        <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Munni ji <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text> </Card.Text>
            </Card>
        </div>
        {/* <div>
            <Card>
                <Card.Title><i className='fas fa-user' /> Neha Raj <img src="/images/google.png" alt='googlr' /></Card.Title>
                <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                </div>
                <Card.Text>  </Card.Text>
            </Card>
        </div> */}
        </Carousel>
    </Container>
</div>
    </>
  )
}

export default Reviews