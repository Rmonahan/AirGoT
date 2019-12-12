import React from "react";

export default class NavDropdown extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    open: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(){
    this.setState({open: !this.state.open });
  }


  render(){
    return (
      <div className="navbarDiv" onBlur={this.toggleDropdown} onClick={this.toggleDropdown} tabIndex="0">
       <img src={window.logoImage} />
            {this.state.open && (
              <ul>
                <div>Profile</div>
                <div>Invite Friends</div>
                <div onClick={this.props.logout}>Log Out</div>
              </ul>
            )} 
      </div>
    )
  }
}
