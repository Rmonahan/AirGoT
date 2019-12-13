import React from "react";

export default class PortfolioDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  toggleDropdownBlur() {
    if (this.state.open === true) {
      this.setState({ open: !this.state.open });
    }
  }


  render() {
    const liClass = `${this.props.navType}Li`
    return (
      <div className="navbarDiv" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
        <span className={this.props.navType}>Portfolio</span>
        {this.state.open && (
          <ul className={liClass} >
            <li> Github
                <div id="borderbot" />
            </li>
            <li> Personal Site
                 <div id="borderbot" />
            </li>    
          </ul>
        )}
      </div>
    )
  }
}