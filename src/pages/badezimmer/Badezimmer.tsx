import React from 'react';
import { HueLamp } from 'components/iobroker/hue-lamp/HueLamp';
import GridLayout from 'react-grid-layout';
import { PowerSwitch } from 'components/iobroker/power-switch/PowerSwitch';

interface IProps {}
const Badezimmer: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <GridLayout width={1225} cols={12} rowHeight={10}>
      <div key="item-1" data-grid={{ x: 0, y: 0, w: 2, h: 6, static: true }}>
        <PowerSwitch name="Spiegelschrank" identifier="shelly.0.SHSW-25#84CCA8B031A4#1.Relay1.Switch" />
      </div>
      <div key="item-2" data-grid={{ x: 2, y: 0, w: 2, h: 6, static: true }}>
        <PowerSwitch name="Deckenlampe" identifier="shelly.0.SHSW-25#84CCA8B031A4#1.Relay0.Switch" />
      </div>
    </GridLayout>
  );
};

export default Badezimmer;
