import React, { Component } from 'react';
import Donor from "./DonorBtn";
import Carousel from 'react-bootstrap/Carousel';

class Slides extends Component {
    render() {
        return (
            <header>
                
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/Slide1.jpg'}
                        alt="First slide"
                        height="400"
                        width="900"
                    />
                    <Carousel.Caption>
                        <h3>JOIN OVER MILLION PEOPLE SUPPORTING CROWDFUNDING....</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/Ssllides1.jpg'}
                        alt="Third slide"
                        height="400"
                        width="900"
                    />

                    <Carousel.Caption>
                    <h3>JOIN OVER MILLION PEOPLE SUPPORTING CROWDFUNDING....</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
            <Donor/>
            </header>
        )
    }
}
export default Slides;