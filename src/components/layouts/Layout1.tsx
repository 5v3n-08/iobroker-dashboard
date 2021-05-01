import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import layoutHelpers from './helpers';
import { LayoutFooter } from './layout-footer/LayoutFooter';
import { LayoutNavbar } from './layout-navbar/LayoutNavbar';
import { LayoutSidenav } from './layout-sidenav/LayoutSidenav';

interface IProps extends PropsWithChildren<any> {}
export const Layout1: FunctionComponent = (props: IProps) => {
  useEffect(() => {
    layoutHelpers.init();
    layoutHelpers.update();
    layoutHelpers.setAutoUpdate(true);

    return () => {
      layoutHelpers.destroy();
    };
  }, []);

  const closeSidenav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    layoutHelpers.setCollapsed(true);
  };

  return (
    <div className="layout-wrapper layout-1">
      <div className="layout-inner">
        <LayoutNavbar {...props} />

        <div className="layout-container">
          <LayoutSidenav {...props} />

          <div className="layout-content">
            <div className="container-fluid flex-grow-1 container-p-y">{props.children}</div>

            <LayoutFooter {...props} />
          </div>
        </div>
      </div>
      <div className="layout-overlay" onClick={closeSidenav}></div>
    </div>
  );
};
