import React from "react";
import {Link} from "react-router-dom";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { user: Object.assign({}, this.state) };
    this.props.processForm(user);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    const errorLis = this.props.errors.map((error, index) => {
      return <li key={index} > {error} </li>
    })

    if (this.props.formType === "Log In") {
    return (
      <div>
        <h1>{this.props.formType} </h1>
        <ul>{errorLis}</ul>
        <form>
          <label> Username
          <input onChange={this.handleInput("username")} type="text" value={this.state.username} />
          </label>
          <label> Password
          <input onChange={this.handleInput("password")} type="password" value={this.state.password} />
          </label>
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
        <Link to="/signup">"Don't yet have an account? Sign up here!"</Link>
      </div>
    )
    }
    else {
      return (
        <div>
          <h1>{this.props.formType} </h1>
          <ul>{errorLis}</ul>
          <form>
            <label> Email
              <input onChange={this.handleInput("email")} type="text" value={this.state.email} />
            </label>
            <label> Username
              <input onChange={this.handleInput("username")} type="text" value={this.state.username} />
            </label>
            <label> Password
               <input onChange={this.handleInput("password")} type="password" value={this.state.password} />
            </label>
            <label> First Name 
               <input onChange={this.handleInput("firstName")} type="text" value={this.state.firstName} />
            </label>
            <label> Last Name
               <input onChange={this.handleInput("lastName")} type="text" value={this.state.lastName} />
            </label>
            <button onClick={this.handleSubmit}>{this.props.formType}</button>
          </form>
          <Link to="/login">"Already have an account? Log in here!"</Link>
        </div>
      )
    }
  }
}