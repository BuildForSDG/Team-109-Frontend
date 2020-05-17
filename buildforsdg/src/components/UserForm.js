import React, { Component } from 'react';
import { Button,Form,Modal } from 'react-bootstrap';

 class Userform extends Component {
    constructor(props){
        super(props)
        this.state={
            Surname : "",
            email : "",
            password : [],
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
       onChange(event){
           this.setState({
               [event.target.name]: event.target.value
           })
       }

       onSubmit(event){
           event.preventDefault();

       }
    render() {
        return (
            <Form className="container center w-50 mt4 mb6" onSubmit={this.onSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> Name*</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Fullname" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Button className="w-100 bg-warning" variant="success" type="submit">
                    Submit
                </Button>
            </Form>
           
        )
    }
}

export default Userform;
