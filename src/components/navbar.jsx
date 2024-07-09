import React, { Component } from "react";

// in a stateless functional component, we do not need the class

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">
            Navbar{" "}
            <span className="badge bedge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
