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

  openNewTab(url){
    window.open(url, '_blank');
  }

  render() {
    const liClass = `${this.props.navType}Li`
    return (
      <div className="navbarDiv" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
        <span className={this.props.navType}>Portfolio</span>
        {this.state.open && (
          <ul className={liClass} >
            <li onClick={() => this.openNewTab("https://github.com/Rmonahan")}> Github
                <div id="borderbot" />
            </li>
            <li onClick={() => this.openNewTab("https://www.linkedin.com/in/ryan-monahan-99323b184")}> LinkedIn
                <div id="borderbot" />
            </li>
            <li onClick={() => this.openNewTab("https://angel.co/ryan-monahan-2")}> AngelList
                <div id="borderbot" />
            </li>
            <li onClick={() => this.openNewTab("https://rmonahan.github.io/")}> Personal Site
                <div id="borderbot" />
            </li>
          </ul>
        )}
      </div>
    )
  }
}