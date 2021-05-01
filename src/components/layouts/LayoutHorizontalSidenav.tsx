import React, { useEffect } from 'react';
import layoutHelpers from './helpers';
import { LayoutNavbar } from './layout-navbar/LayoutNavbar';
import { LayoutSidenav } from './layout-sidenav/LayoutSidenav';
import { LayoutFooter } from './layout-footer/LayoutFooter';

interface IProps {}
export const LayoutHorizontalSidenav: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  useEffect(() => {
    layoutHelpers._removeClass('layout-expanded');

    layoutHelpers.init();
    layoutHelpers.update();
    layoutHelpers.setAutoUpdate(true);

    return () => {
      layoutHelpers.destroy();
    };
  }, []);

  return (
    <div className="layout-wrapper layout-1 layout-without-sidenav">
      <div className="layout-inner">
        <LayoutNavbar sidenavToggle={false} navbarBg="dark" />

        <div className="layout-container">
          <div className="layout-content">
            <LayoutSidenav orientation="horizontal" sidenavBg="dark" {...props} />

            <div className="container-fluid flex-grow-1 container-p-y">{props.children}</div>

            <LayoutFooter footerBg="dark" {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};
