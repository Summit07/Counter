import React, { Component } from "react";

//Stateless Functional Componant , you can't use lifecycle hooks in ~ ~ ~

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-warning">{totalCounters}</span>
      </a>
    </nav>
  );
};

//remove this & props

// class Navbar extends Component {
//   // state = {  }
//   render(){
//      //return
//   }
// }

export default Navbar;
