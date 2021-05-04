import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import layoutHelpers from '../helpers';
import logo from 'assets/images/logo.png';
import { Clock } from 'components/clock/Clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { globalConfig } from 'configOverrides/global.config';
import { useObject } from 'hooks/useObject';

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
  const battery = useObject<number>(`${globalConfig.header?.batteryIdentifier}`);

  return (
    <Navbar bg={props.navbarBg} expand="lg" className="layout-navbar align-items-lg-center container-p-x">
      {/* Brand demo (see src/demo.css) */}
      {!props.noHeader && (
        <Fragment>
          <Navbar.Brand as={NavLink} to="/" className="app-brand demo d-lg-none py-0 mr-4">
            {globalConfig.header?.NoBrandIcon === false && <img src={logo} style={{ width: '5%' }} className="mr-2" />}
            <span className="app-brand-text demo font-weight-normal ml-2">{globalConfig.header?.title ?? 'ioBroker - Dashboard'}</span>
          </Navbar.Brand>
          <Clock format="dddd, DD.MM.YYYY HH:mm:ss" refreshEverySeconds={1} />
          {globalConfig.header?.batteryIdentifier !== undefined && (
            <div className="ml-5">
              <FontAwesomeIcon icon={['fas', 'battery-full']} />
              <span className="ml-2">{battery.value} %</span>
            </div>
          )}
        </Fragment>
      )}

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
