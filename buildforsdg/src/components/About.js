import React, { Component } from 'react';
import { Button,Form, } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="tc pa2 mt4">About Us</h4>
                <p>
                    Nigeria, as of 2020, seems to be the poverty capital of the world!. With an unemployed young population of over 30 million, 
                    it is like a powder keg just waiting for a spark to explode. A proof to this fact, is the existence of the globally, notorious, 
                    terrorist groups like Boko Haram as well as the recently formed one-million robbery gang terrorizing citizens at their homes 
                    during the lockdown period of covid-19 pandemic. Available data suggest that 50 per cent of the unemployed youth across Nigeria 
                    have not received any formal education. Many of them will venture into big cities like Lagos in search of income opportunities 
                    and ultimately take up informal jobs.
                </p>
                <p>
                    The overwhelming majority of these youths are unproductive and unable to be productive due lack of access to jobs, 
                    lack of access to skills, and lack of access to funding to create and sustain productive economic activities. 
                    Addressing these core problems will help these youths get out of poverty.
                </p>
                <p>
                    The number one solution to poverty is productivity. Thus, our contribution to solving poverty in our communities entails 
                    to create a platform that connects this segment of the population to the needed funding, training and economic mentoring 
                    using the crowdfunding system we developed. As we have seen during the ongoing COVID-19 pandemic, there are well-meaning 
                    Nigerians who donated to the society, and there could still be many more with the capacity and willingness to donate to 
                    the upliftment of society, without the necessary channels in which to do so. This platform would be a means for them to 
                    make impact where it would be most needed -  at the segment of the population with the youthful energy and creativity to 
                    create economic activity, gainful employment, and ameliorate inequality.
                </p>
                <p>
                    The fund realized via crowdfunding if properly channelled to the youth empowerment project, it will fund the training and 
                    setting up of small businesses for the jobless youths, and this will lead to less crime in the society and ultimately lead 
                    to reduction of poverty in our community.
                </p>
                <p>
                    Surely, this is the way to go now as training will equip the uneducated youth with a trade or craft skill to secure or 
                    establish decent jobs. White collar jobs are very scarce in Lagos; it is evident that there is a huge unmet need for 
                    technicians and related services in the evolving new Lagos. More youth need to reskill to explore these opportunities. 
                    That way, even though their job/business may end up within the informal sector after all, they will serve as productive 
                    members of the ‘modern city’ – rather than becoming a threat to all if remaining unable to generate livelihoods due to no 
                    education or skills at all, eventually turning to criminal activities(Ivagba, 2019).
                </p>
                <div>
                    <h5 className="tc ">Leave us a Message</h5>
                <Form className="container w-50 justify-center mb6 mt3">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Fullname" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button className="w-25 bg-warning" variant="success" type="submit">
                        Send
                    </Button>
                </Form>
                </div>
            </div>
        )
    }
}
