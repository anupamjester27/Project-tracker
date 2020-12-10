import React, { Component } from "react";
import { Link } from "react-router";
import AddUser from "../forms/addUser";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container containerDashboard">
          <div className="profilewidget">
            <AddUser />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
