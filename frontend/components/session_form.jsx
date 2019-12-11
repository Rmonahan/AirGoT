import React from "react";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      month: "",
      day:"",
      year:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const birth_date = this.state.year + " " + this.state.month + " " + this.state.day;
    const user = { user: {email: this.state.email, password: this.state.password, first_name: this.state.firstName, last_name: this.state.lastName, birth_date: birth_date}};
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const birthdayErrors = [];
    const emailErrors = [];
    const firstNameErrors = [];
    const lastNameErrors = [];
    const passwordErrors = [];
    const otherErrors = [];

    let firstNameErrorClass = "NoErrorState";
    let lastNameErrorClass = "NoErrorState";
    let birthdayErrorClass = "birthdateDiv NoErrorSelectState";
    let passwordErrorClass = "NoErrorState";
    let emailErrorClass = "NoErrorState";



    this.props.errors.forEach((error, index) => {
      if (error.includes("First")){
        firstNameErrors.push(<li key={index} > {error} </li>);
        firstNameErrorClass = "RedErrorClass"
      } 
      else if (error.includes("Last")){
        lastNameErrors.push(<li key={index} > {error} </li>);
        lastNameErrorClass = "RedErrorClass"
      }
      else if (error.includes("Email")){
        emailErrors.push(<li key={index} > {error} </li>);
        emailErrorClass = "RedErrorClass"
      }
      else if (error.includes("Password") || error.includes("password")){
        passwordErrors.push(<li key={index} > {error} </li>);
        passwordErrorClass = "RedErrorClass"
      } 
      else if (error.includes("birth date") || error.includes("18")) {
        birthdayErrors.push(<li key={index} > {error} </li>);
        birthdayErrorClass = "birthdateDiv RedErrorSelectClass"
      }
      else {
        otherErrors.push(<li key={index} > {error} </li>);
      }
    }
    );



    if (this.props.formType === "Log in") {
    return (
      <div className="sessionFormDiv">
        <div className="closeForm">
          <button onClick={this.props.closeModal}>×</button>
        </div>
        <ul className="errors">{otherErrors}</ul>
        <form className="sessionForm">
          <div className="formFields">
            <label className={emailErrorClass}>
          <input onChange={this.handleInput("email")} type="email" placeholder="Email address" value={this.state.email} />
          </label>
          <div className="emailIcon">	<i className="far fa-envelope"></i> </div>
          <label className={passwordErrorClass}>
          <ul className="errors">{emailErrors}</ul>
          <input onChange={this.handleInput("password")} type="password" placeholder="Password" value={this.state.password} />
          </label>
            <div className="lockIcon">	<i className="fas fa-lock"></i> </div>
          <ul className="errors">{passwordErrors}</ul>
          </div>
          <label className="check">
            <input type="checkbox" />
             Remember me

          <button className="showPassword">Show password</button>
          <button type="submit" className="loginFormButton" onClick={this.handleSubmit}>{this.props.formType}</button>
            <button className="forgotPassword">Forgot password?</button>
          </label>
        
          <span className="otherForm"> Don’t have an account? {this.props.otherForm}</span>
        </form>
      </div>
    );
    }
    else {

        const dayOptions = [];
        for (let i = 1; i < 32; i++) {
         dayOptions.push(<option key={i} value={i}>{i}</option>);
        }

      const yearOptions = [];
        for (let i = 2019; i >= 1899; i--) {
        yearOptions.push(<option key={i} value={i}>{i}</option>);
      }
      return (
        <div className="sessionFormDiv">
          <div className="closeForm">
          <button onClick={this.props.closeModal}>×</button>
          </div>
          <ul className="errors">{otherErrors}</ul>
          <form className="sessionForm">
            <div className="formFields">
            <label className={emailErrorClass}> 
              <input onChange={this.handleInput("email")} type="email" placeholder="Email address" value={this.state.email} />
              <div className="emailIcon">	<i className="far fa-envelope"></i> </div>
              <ul className="errors">{emailErrors}</ul>
            </label>
            <label className={firstNameErrorClass}> 
               <input onChange={this.handleInput("firstName")} type="text" placeholder="First name" value={this.state.firstName} />
            </label>
              <div className="personIconFirstName">	<i className="far fa-user"></i> </div>
              <ul className="errors">{firstNameErrors}</ul>
            <label className={lastNameErrorClass}> 
               <input onChange={this.handleInput("lastName")} type="text" placeholder="Last name" value={this.state.lastName} />
            </label>
              <div className="personIconLastName">	<i className="far fa-user"></i> </div>
              <ul className="errors">{lastNameErrors}</ul>
            <label className={passwordErrorClass}>
               <input onChange={this.handleInput("password")} type="password" placeholder="Create a Password" value={this.state.password} />
            </label>
              <div className="eyeIcon">	<i className="far fa-eye-slash"></i> </div>
              <ul className="errors">{passwordErrors}</ul>
            </div>
            <label className="birthday"> Birthday </label>
            <p> To sign up, you need to be at least 18. Other people who use Airbnb won’t see your birthday.</p>
            <div className={birthdayErrorClass}>
              <select className="month" onChange={this.handleInput("month")} defaultValue="Month" name="Month">
                <option value="Month" disabled={true}>Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <div className="monthArrow">⌵</div>
            <select className="day" onChange={this.handleInput("day")} defaultValue="Day" name="Day">
              <option value="Day" disabled={true}>Day</option>
              {dayOptions}
            </select>
              <div className="dayArrow">⌵</div>
            <select className="year" onChange={this.handleInput("year")} defaultValue="Year" name="Year">
              <option value="Year" disabled={true}>Year</option>
              {yearOptions}
            </select>
              <div className="yearArrow">⌵</div>
            </div>
              <ul className="birthdayErrors">{birthdayErrors}</ul>
            <button type="submit" className="signupFormButton" onClick={this.handleSubmit} >{this.props.formType}</button>
            <p>AirGoT takes no responsibility for lost swords, armor or gold stolen during stays. Westoros can be a very dangerous place if you don't have the right friends. 
              Proceed with caution and try to stay within your alliance boundaries.</p>
            <label className="check">
            <input type="checkbox" />
               I accept all responsibility for any danger I may find myself in while staying in <span id="checkText"> AirGoT locations. </span>
            </label>
            
            <span className="otherForm"> Already have an AirGoT account? {this.props.otherForm} </span>
          </form>
        </div>
      );
    }
  }
}