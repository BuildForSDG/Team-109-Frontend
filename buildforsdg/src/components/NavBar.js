import React, { Component } from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
// import DonateNow from './DonateNow';
import Heeader from "./header";
import Login from './Login';
import SignUp from './SignUP';


class Navigation extends Component {
    render() {
        return ( <div>
            <Navbar collapseOnSelect expand="lg" bg="gray" variant="light" >
                <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + '/images/Teamlogo.png'} alt="BrandLogo" width="55" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto" >
                {/* <Nav className="center p-2 bg-warning" > */}
                    
                    {/* <Nav.Link href="/" className="br hover-bg-white-60 active text-white" >HOME</Nav.Link>
                    <Nav.Link href="/cause" className="br hover-bg-white-60">OUR CAUSE</Nav.Link>
                    <Nav.Link href="/about" className="br hover-bg-white-60">ABOUT US</Nav.Link>
                    <Nav.Link href="#"  className="hover-bg-white-60"><DonateNow/></Nav.Link> */}
                {/* </Nav> */}
            <Nav className="ml-auto">
                <Nav.Link style={{color:"yellow"}} className="bg-warning hover-bg-white-60"><SignUp/></Nav.Link>
                <Nav.Link className="bg-warning hover-bg-white-60"><Login/></Nav.Link>

            </Nav>
                </Navbar.Collapse>
                {/* <Nav className="ml-auto"> */}
                {/* <Nav.Link className="bg-warning hover-bg-white-60"><Login/></Nav.Link> */}
                {/* </Nav> */}
            </Navbar >
            <Heeader/>
            </div>
        )
    }
}

export default Navigation;
