import React from 'react';
import Sidenav from 'vendor/libs/sidenav/index';
import SidenavRouterLink from 'vendor/libs/sidenav/SidenavRouterLink';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes/routes';

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
      <div className={`sidenav-inner d-flex justify-content-center ${props.orientation !== 'horizontal' ? 'py-1' : ''}`}>
        {routes.map((route) => (
          <SidenavRouterLink key={route.path} to={route.path} exact={route.exact} icon={route.icon}>
            <span className="ml-2">{route.name}</span>
          </SidenavRouterLink>
        ))}
      </div>
    </Sidenav>
  );
};
