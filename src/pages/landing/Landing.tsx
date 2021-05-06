import { HueLamp } from 'components/iobroker/hue-lamp/HueLamp';
import { PowerSwitch } from 'components/iobroker/power-switch/PowerSwitch';
import { WashingMachineCountdown } from 'components/iobroker/washing-machine-countdown/WashingMachineCountdown';
import { TrashSchedulerOnlyNext } from 'components/iobroker/trash-scheduler/TrashSchedulerOnlyNext';
import React, { Fragment } from 'react';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row mb-2">
        <TrashSchedulerOnlyNext className="mx-1" identifier="trashschedule.0" />
        <HueLamp className="mx-1" name="Flur" identifier="hue.0.Flur" />
      </div>
      <div className="row">
        <WashingMachineCountdown name="Waschmaschiene" hours={3} minutes={30} />
      </div>
    </Fragment>
  );
};

export default Landing;
