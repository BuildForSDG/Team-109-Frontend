import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

function Formfield(props) {
  return (
    <Form.Group>
      <Form.Label> {props.label}</Form.Label>
      <Form.Control
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
        placeholder={props.placeholder}
        autoComplete="new-password"
        required
      />
    </Form.Group>
  );
}

class SelectLGA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LGA: [],
      selected_area: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    fetch("http://locationsng-api.herokuapp.com/api/v1/states/lagos/lgas")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ LGA: data });
      });
  }

  handleSelect = (event) => {
    this.setState({ selected_area: event.target.value });
  };

  render() {
    const selectedOption = Object.values(this.state.selected_area);

    const options = this.state.LGA.filter(
      (p) =>
        !selectedOption.find((sP) => sP === p) || p === this.state.selected_area
    );

    return (
      <label>
        Select your L.G.A
        <select
          className="pa2 w-100 "
          name="selected_area"
          onChange={this.handleSelect}
          value={this.state.selected_area}
        >
          <option> Select LGA </option>
          {options}
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
    );
  }
}

class Userform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    // this.setState({ [event.target.name]: event.target });
  }
  render() {
    return (
      <Form className="container center w-50 mt4 mb6" onSubmit={this.onSubmit}>
        <Formfield
          label={"Firstname"}
          className=" w-100"
          name="firstname"
          type="text"
          placeholder="Enter Firstname"
          //   value={this.state.firstname}
          onChange={this.handleInputChange}
        />
        <Formfield
          label={"Lastname"}
          className=" w-100"
          name="lastname"
          type="text"
          placeholder="Lastname"
          //   value={this.state.lastname}
          onChange={this.handleInputChange}
        />

        <Formfield
          label={"Email"}
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <div className="w-100" ><SelectLGA /></div>
        <Formfield
          label={"Password"}
          className=" w-100"
          //   name="Name"
          type="password"
          placeholder="Password"
          //   value={this.state.email}
          onChange={this.handleInputChange}
        />
        <Formfield
          label={"Password"}
          className=" w-100"
          //   name="Name"
          type="password"
          placeholder="Confirm Password"
          //   value={this.state.email}
          onChange={this.handleInputChange}
        />

        <Button
          className="w-100 bg-warning mt2"
          variant="success"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export { Userform, Formfield, SelectLGA };
