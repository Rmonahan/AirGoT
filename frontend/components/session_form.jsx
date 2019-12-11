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

    const errorLis = this.props.errors.map((error, index) => {
      return <li key={index} > {error} </li>
    });

    if (this.props.formType === "Log in") {
    return (
      <div className="sessionFormDiv">
        <button className="closeForm" onClick={this.props.closeModal}>×</button>
        <ul>{errorLis}</ul>
        <form className="sessionForm">
          <div className="formFields">
          <label>
          <input onChange={this.handleInput("email")} type="email" placeholder="  Email address" value={this.state.email} />
          </label>
          <label>
          <input onChange={this.handleInput("password")} type="password" placeholder="  Password" value={this.state.password} />
          </label>
          </div>
          <label className="check">
            <input type="checkbox" />
             Remember me

          <button className="showPassword">Show password</button>
          <button className="loginFormButton" onClick={this.handleSubmit}>{this.props.formType}</button>
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
          <button className="closeForm" onClick={this.props.closeModal}>×</button>
          <ul>{errorLis}</ul>
          <form className="sessionForm">
            <div className="formFields">
            <label> 
              <input onChange={this.handleInput("email")} type="email" placeholder="  Email address" value={this.state.email} />
            </label>
            <label> 
               <input onChange={this.handleInput("firstName")} type="text" placeholder="  First name" value={this.state.firstName} />
            </label>
            <label> 
               <input onChange={this.handleInput("lastName")} type="text" placeholder="  Last name" value={this.state.lastName} />
            </label>
            <label>
               <input onChange={this.handleInput("password")} type="password" placeholder="  Create a Password" value={this.state.password} />
            </label>
            </div>
            <label className="birthday"> Birthday </label>
            <p> To sign up, you need to be at least 18. Other people who use Airbnb won’t see your birthday.</p>
            <div className="birthdateDiv">
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
            <select className="day" onChange={this.handleInput("day")} defaultValue="Day" name="Day">
              <option value="Day" disabled={true}>Day</option>
              {dayOptions}
            </select>
            <select className="year" onChange={this.handleInput("year")} defaultValue="Year" name="Year">
              <option value="Year" disabled={true}>Year</option>
              {yearOptions}
            </select>
            </div>
            <button className="signupFormButton" onClick={this.handleSubmit} >{this.props.formType}</button>
            <p>Airbnb will send you members-only deals, inspiration, promotions and policy updates via email. 
              You can opt out of receiving these at any time in your <br></br> account settings or directly from the marketing 
            notification.</p> 
            <label className="check">
            <input type="checkbox" />
               I don’t want to receive marketing messages from Airbnb.
            </label>
            
            <span className="otherForm"> Already have an AirGoT account? {this.props.otherForm} </span>
          </form>
        </div>
      );
    }
  }
}