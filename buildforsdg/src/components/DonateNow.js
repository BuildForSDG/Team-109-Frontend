import React from "react";
import {Formfield} from "./UserForm";
import { Button, Modal } from "react-bootstrap";

class DonateNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentType: undefined,
      modalShow: false,
      modalTitle: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  onSubmit(event){
    event.preventDefault();

}
  setModalHide = () => {
    this.setState({ modalShow: false, modalTitle: "" });
  };

  setModalShow = () => {
    this.setState({
      modalShow: true,
      modalTitle: "Please Select Donation mode.",
    });
  };

  render() {
    return (
      <div>
        <p onClick={() => this.setModalShow(true)}>DONATE NOW</p>

        <Modal
          closeButton
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.modalShow}
          onHide={() => this.setModalHide(false)}
        >
          <Modal.Header className="tc" closeButton>
            {this.state.modalTitle}
          </Modal.Header>
          <Modal.Body className=" bg-warning">
            <form onSubmit={this.onSubmit}  className ="center w-70" >
              <div className ="d-flex w-70">
              <span> Credit Card:
              <Formfield
                //  label= {"Credit card"}
                name={"isPaymentType"}
                type="checkbox"
                checked={this.state.isPaymentType}
                onChange={this.handleInputChange}
              />
              </span>
                <span> Paypal
                <Formfield
                // label= {"Paypal"}
                  name={"isPaymentType"}
                  type={"checkbox"}
                  checked={this.state.isPaymentType}
                  onChange={this.handleInputChange}
                />
                </span>
              </div>
              <Formfield
                  label= {"Firstname"}
                  name="firstName"
                  type="text"
                  value={this.state.firstname}
                  onChange={this.handleInputChange}
                />
              <Formfield
               label= {"Lastname"}
                  className=" w-100"
                  name="lastName"
                  type="text"
                  value={this.state.lastname}
                  onChange={this.handleInputChange}
                />
              
              <Formfield
                   label= {"Email"}
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
             
              <Button
                className="w-100 bg-warning"
                variant="success"
                type="submit"
              >
                Donate
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default DonateNow;
