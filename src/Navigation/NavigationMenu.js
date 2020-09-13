import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css';

function NavigationMenu() {
    return(
      <Navbar expand="lg" className="navigationbar">
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="nav-options">
          <Nav>
            <NavLink exact to="/portfolio" className="nav-option" activeClassName="nav-option--active">About</NavLink>
            <NavLink to="/work" className="nav-option" activeClassName="nav-option--active">Work</NavLink>
            <NavLink to="/skills" className="nav-option" activeClassName="nav-option--active">Skills</NavLink>
            {/* <Nav.Link href="/documents" className="nav-option" activeClassName="underline">Documents</Nav.Link> */}
            <NavLink to="/contact" className="nav-option" activeClassName="nav-option--active">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationMenu;