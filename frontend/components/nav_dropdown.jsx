import React from "react";

export default class NavDropdown extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    open: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
  }

  toggleDropdown(){
    this.setState({open: !this.state.open });
  }

  toggleDropdownBlur() {
   if (this.state.open === true) {
    this.setState({ open: !this.state.open });
   }
  }


  render(){
    // let image = window.mapImage;
    const { currentUser } = this.props;
    // if(currentUser.firstName === "Ned"){
    //   image = window.nedImage;
    // }
    // else if(currentUser.firstName === "Jon"){
    //   image = window.jonImage;
    // } 
    // else if (currentUser.firstName === "Jamie") {
    //   image = window.jamieImage;
    // }
    // else if (currentUser.firstName === "Sansa") {
    //   image = "https://airgot-dev.s3.amazonaws.com/GbfLNQ1J8ADuYXbZzsA3ZuMc";
    // }
    return (
      <div className="navbarDiv" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
       <img src={currentUser.profilePhotoUrl} />
            {this.state.open && (
              <ul>
                <li onClick={this.props.logout}>Log Out
                <div id="borderbot" />
                </li>
              </ul>
            )} 
      </div>
    )
  }
}
