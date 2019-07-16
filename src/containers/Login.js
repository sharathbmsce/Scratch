import React, { Component } from "react";

import "./Login.css";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
     event.preventDefault();
     try{
    if (this.state.email=="sharath@gmail.com" && this.state.password=="123456")
    {
      alert("Logged in");
      this.props.history.push("/");

    }
  }
  catch(e)
  {
    alert(e.message);
  }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
  block
  bsSize="large"
  disabled={!this.validateForm()}
  type="submit"
  isLoading={this.state.isLoading}
  text="Login"
  loadingText="Logging in…"
/>

        </form>
      </div>
    );
  }
}
