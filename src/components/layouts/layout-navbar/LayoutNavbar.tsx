import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import layoutHelpers from '../helpers';

interface IProps {
  navbarBg?: string;
  sidenavToggle?: boolean;
  noHeader?: boolean;
  noHeaderIcon?: boolean;
}
export const LayoutNavbar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const onToggleSidenav = () => {
    layoutHelpers.toggleCollapsed();
  };

  return (
    <Navbar bg={props.navbarBg} expand="lg" className="layout-navbar align-items-lg-center container-p-x">
      {/* Brand demo (see src/demo.css) */}
      {!props.noHeader && props.children}

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
