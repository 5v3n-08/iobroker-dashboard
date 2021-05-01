import React, { Fragment } from 'react';
import Sidenav from 'vendor/libs/sidenav/index';
import SidenavRouterLink from 'vendor/libs/sidenav/SidenavRouterLink';
import SidenavDivider from 'vendor/libs/sidenav/SidenavDivider';
import SidenavMenu from 'vendor/libs/sidenav/SidenavMenu';
import SidenavHeader from 'vendor/libs/sidenav/SidenavHeader';
import { routes } from 'routes/routes';

import _ from 'lodash';
import { Link, useLocation } from 'react-router-dom';
import { Router } from 'routes/Router';
import { IRoute } from 'routes/routes.config';

interface IProps {
  orientation?: 'vertical' | 'horizontal';
  sidenavBg?: string;
}

export const LayoutSidenav: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const location = useLocation();

  const layoutSidenavClasses = () => {
    let bg = props.sidenavBg;
    if (props.orientation === 'horizontal' && (bg?.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
      bg = bg?.replace(' sidenav-dark', '').replace(' sidenav-light', '').replace('-darker', '').replace('-dark', '');
    }
    return `bg-${bg} ` + (props.orientation !== 'horizontal' ? 'layout-sidenav' : 'layout-sidenav-horizontal container-p-x flex-grow-0');
  };

  const toggleSidenav = () => {
    // layoutHelpers.toggleCollapsed()
  };

  const isMenuActive = (url: string) => {
    return location.pathname.indexOf(url) === 0;
  };

  const isMenuOpen = (url: string) => {
    return location.pathname.indexOf(url) === 0 && props.orientation !== 'horizontal';
  };

  return (
    <Sidenav orientation={props.orientation} className={[layoutSidenavClasses()].join(' ')}>
      {/* Links */}
      <div className={`sidenav-inner ${props.orientation !== 'horizontal' ? 'py-1' : ''}`}>
        {/* {routes.map((route) => (
          <SidenavRouterLink key={1} to="/dashboards/dashboard-1">
            Dashboard 1
          </SidenavRouterLink>
        ))} */}
        <SidenavRouterLink to="/" exact={true} icon="fas fa-home">
          <span className="ml-1">Übersicht</span>
        </SidenavRouterLink>
        {/* Dashboards
        <SidenavMenu icon="ion ion-md-speedometer" linkText="Dashboards" active={isMenuActive('/dashboards')} open={isMenuOpen('/dashboards')}>
          <SidenavRouterLink to="/dashboards/dashboard-1">Dashboard 1</SidenavRouterLink>
          <SidenavRouterLink to="/dashboards/dashboard-2">Dashboard 2</SidenavRouterLink>
          <SidenavRouterLink to="/dashboards/dashboard-3">Dashboard 3</SidenavRouterLink>
          <SidenavRouterLink to="/dashboards/dashboard-4">Dashboard 4</SidenavRouterLink>
          <SidenavRouterLink to="/dashboards/dashboard-5">Dashboard 5</SidenavRouterLink>
        </SidenavMenu> */}
      </div>
    </Sidenav>
  );
};
