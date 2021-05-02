import { PowerSwitch } from 'components/iobroker/power-switch/PowerSwitch';
import React, { Fragment } from 'react';

interface IProps {}
export const Badezimmer: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row">
        <PowerSwitch className="col-2 mx-1" identifier="shelly.0.SHSW-25#84CCA8B031A4#1.Relay0.Switch" name="Deckenlampe" />
        <PowerSwitch className="col-2 mx-1" identifier="shelly.0.SHSW-25#84CCA8B031A4#1.Relay1.Switch" name="Spiegelschrank" />
      </div>
    </Fragment>
  );
};

export default Badezimmer;
