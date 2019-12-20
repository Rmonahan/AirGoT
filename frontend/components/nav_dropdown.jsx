import React from "react";
import {withRouter} from "react-router-dom";

class NavDropdown extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    open: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
    this.sendToBookings = this.sendToBookings.bind(this);
  }

  toggleDropdown(){
    this.setState({open: !this.state.open });
  }

  toggleDropdownBlur() {
   if (this.state.open === true) {
    this.setState({ open: !this.state.open });
   }
  }

  sendToBookings(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}/bookings`);
  }


  render(){
    const { currentUser } = this.props;

    return (
      <div className="navbarDiv" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
       <img src={currentUser.profilePhotoUrl} />
            {this.state.open && (
              <ul>
                <li onClick={this.sendToBookings}>Bookings
                  <div id="borderbot" />
                </li>
                <li onClick={this.props.logout}>Log Out
                 <div id="borderbot" />
               </li>
              </ul>
            )} 
      </div>
    )
  }
}

export default withRouter(NavDropdown);