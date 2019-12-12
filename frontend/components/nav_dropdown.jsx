import React from "react";
import { endianness } from "os";

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
    let image = window.mapImage;
    const { currentUser } = this.props;
    if(currentUser.firstName === "Ned"){
      image = window.nedImage;
    }
    else if(currentUser.firstName === "Jon"){
      image = window.jonImage;
    } 
    else if (currentUser.firstName === "Jamie") {
      image = window.jamieImage;
    }
    else if (currentUser.firstName === "Sansa") {
      image = window.sansaImage;
    }

    return (
      <div className="navbarDiv" onBlur={this.toggleDropdown} onClick={this.toggleDropdown} tabIndex="0">
       <img src={image} />
            {this.state.open && (
              <ul>
                <div>Profile</div>
                <span id="borderbot" />
                <div>Invite Friends</div>
                <span id="borderbot" />
                <div onClick={this.props.logout}>Log Out</div>
                <span id="borderbot" />
              </ul>
            )} 
      </div>
    )
  }
}
