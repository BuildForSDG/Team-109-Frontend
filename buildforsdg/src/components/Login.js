import React, { Component } from 'react';
import { Button,Form,Modal } from 'react-bootstrap';


 class Login extends Component {
     constructor(props){
         super(props)
         this.state={
             username : "",
             password : [],
             modalShow: false,
             modalTitle: "",
         }
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
        //  this.setModalShow = this.setModalShow.bind(this);
     }
        onChange(event){
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        onSubmit(event){
            event.preventDefault();

        }
        setModalHide = () => {
            this.setState({ modalShow: false, modalTitle: "", });
          };
        
          setModalShow = () => {
            this.setState({ modalShow: true ,modalTitle: "Please Login here."});
          };
    render() {
        return (<div>
            <p onClick={() =>
              this.setModalShow(true)
            }>Login</p>
           
            <Modal
            closeButton
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.state.modalShow}
            onHide={() => this.setModalHide(false)}
          >
            <Modal.Header className="tc" closeButton>
              {/* <Modal.Title id="contained-modal-title-vcenter" className="tc"> */}
                {this.state.modalTitle}
              {/* </Modal.Title> */}
            </Modal.Header>
            <Modal.Body className="center">
            <Form onSubmit ={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Modal.Body>
            
          </Modal>
        </div>
        )
    }
}

export default Login;
