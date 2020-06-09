import React, { Component } from 'react';
import {Modal } from 'react-bootstrap';
import DonorForm from "./UserForm"


 class SignUp extends Component {
     constructor(props){
         super(props)
         this.state={
             modalShow: false,
             modalTitle: "",
         } 
     }
        setModalHide = () => {
            this.setState({ modalShow: false, modalTitle: "", });
          };
        
          setModalShow = () => {
            this.setState({ modalShow: true ,modalTitle: "Youth's Corner- Please Sign Up here."});
          };
    render() {
        return (<div>
            <p onClick={() =>
              this.setModalShow(true)
            }>Sign Up</p>
           
            <Modal
            closeButton
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.state.modalShow}
            onHide={() => this.setModalHide(false)}
          >
            <Modal.Header className="tc5 br4" closeButton>
             {this.state.modalTitle}
            </Modal.Header>
            <Modal.Body className="bg-warning">
            <DonorForm/>
            </Modal.Body>
           
          </Modal>
        </div>
        )
    }
}

export default SignUp;
