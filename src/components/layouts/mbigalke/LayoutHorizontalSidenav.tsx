import React, { useEffect } from 'react';
import layoutHelpers from '../helpers';
import { LayoutNavbar } from '../layout-navbar/LayoutNavbar';
import { LayoutSidenav } from '../layout-sidenav/LayoutSidenav';
import { LayoutFooter } from '../layout-footer/LayoutFooter';
import { Clock } from 'components/clock/Clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useObject } from 'hooks/useObject';
import { globalConfig } from 'configOverrides/global.config';

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

  const battery = useObject<number>(`${globalConfig.header?.batteryIdentifier}`);

  return (
    <div className="layout-wrapper layout-1 layout-without-sidenav">
      <div className="layout-inner">
        <LayoutNavbar sidenavToggle={false} navbarBg="dark">
          <Clock format="dddd, DD.MM.YYYY HH:mm:ss" refreshEverySeconds={1} />
          {globalConfig.header?.batteryIdentifier !== undefined && (
            <div className="ml-5">
              <FontAwesomeIcon icon={['fas', 'battery-full']} />
              <span className="ml-2">{battery.value} %</span>
            </div>
          )}
        </LayoutNavbar>

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
