import { ShellySwitch } from 'components/iobroker/shelly/ShellySwitch';
import React, { Fragment } from 'react';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row">
        <ShellySwitch identifier="shelly.0.SHSW-1#769B2E#1.Relay0.Switch" name="Licht" room="HWR" />
        {/* <HueLamp identifier="hue.0.Büro_PC_links" name="PC - links" room="Büro" /> */}
      </div>
    </Fragment>
  );
};

export default Landing;
