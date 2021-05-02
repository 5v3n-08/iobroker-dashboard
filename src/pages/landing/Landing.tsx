import { HueLamp } from 'components/iobroker/hue-lamp/HueLamp';
import { PowerSwitch } from 'components/iobroker/power-switch/PowerSwitch';
import { TrashSchedulerOnlyNext } from 'components/iobroker/trash-scheduler/TrashSchedulerOnlyNext';
import React, { Fragment } from 'react';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row mb-2">
        <TrashSchedulerOnlyNext identifier="trashschedule.0" />
      </div>
      <div className="row">
        <HueLamp className="col-2 mr-1" identifier="hue.0.Büro_PC_links" name="PC - links" room="Büro" />
        <HueLamp className="col-2 mx-1" identifier="hue.0.Büro_PC_rechts" name="PC - rechts" room="Büro" />
        <PowerSwitch className="col-2 mx-1" identifier="hue.0.Büro_PC_rechts.on" iconSet="switch" name="PC - rechts" room="Büro" />
      </div>
    </Fragment>
  );
};

export default Landing;
