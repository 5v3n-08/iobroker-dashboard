import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import layoutHelpers from '../helpers';
import logo from 'assets/images/logo.png';

interface IProps {
  navbarBg?: string;
  sidenavToggle?: boolean;
}
export const LayoutNavbar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const onToggleSidenav = () => {
    layoutHelpers.toggleCollapsed();
  };

  return (
    <Navbar bg={props.navbarBg} expand="lg" className="layout-navbar align-items-lg-center container-p-x">
      {/* Brand demo (see src/demo.css) */}
      <Navbar.Brand as={NavLink} to="/" className="app-brand demo d-lg-none py-0 mr-4">
        <img src={logo} style={{ width: '5%' }} className="mr-2" />
        <span className="app-brand-text demo font-weight-normal ml-2">ioBroker - Dashboard</span>
      </Navbar.Brand>

      {/* Sidenav toggle (see src/demo.css) */}
      {props.sidenavToggle && (
        <Nav className="layout-sidenav-toggle d-lg-none align-items-lg-center mr-auto">
          <Nav.Item as="a" className="nav-link px-0 mr-lg-4" href="#toggle" onClick={onToggleSidenav}>
            <i className="ion ion-md-menu text-large align-middle"></i>
          </Nav.Item>
        </Nav>
      )}

      <Navbar.Toggle />

      <Navbar.Collapse>
        {/* Divider */}
        <hr className="d-lg-none w-100 my-2" />

        {/* <Nav className="align-items-lg-center">xxx</Nav> */}

        <Nav className="align-items-lg-center ml-auto">
          {/* Divider */}
          {/* <div className="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
