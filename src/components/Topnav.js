import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Topnav = () => {
  return (
    <Navbar expand="md" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink className="nav-link-custom" exact to="/">intro</NavLink>
          <NavLink className="nav-link-custom" to="/tech">technologies</NavLink>
          <NavLink className="nav-link-custom" to="/projects">projects</NavLink>
          <NavLink className="nav-link-custom" to="/personal">personal</NavLink>
          <NavLink className="nav-link-custom" to="/connect">connect</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topnav;
