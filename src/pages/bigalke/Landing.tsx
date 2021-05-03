import { PowerSwitch } from 'components/iobroker/power-switch/PowerSwitch';
import { Roborock } from 'components/iobroker/roborock/Roborock';
import { TrashSchedulerOnlyNext } from 'components/iobroker/trash-scheduler/TrashSchedulerOnlyNext';
import React, { Fragment } from 'react';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row">
        <PowerSwitch className="col-2 mx-1" identifier="shelly.0.SHSW-1#769B2E#1.Relay0.Switch" iconSet="switch" name="Licht" room="HWR" />
        <Roborock identifier="mihome-vacuum.0" title="Sauger" widget="full" openType="modal" room="Wohnzimmer" />
      </div>
      <div className="row">
        <TrashSchedulerOnlyNext identifier="trashschedule.0" />
      </div>
    </Fragment>
  );
};

export default Landing;
