import { HueBlub } from 'components/hue-blub/HueBlub';
import { TrashSchedulerOnlyNext } from 'components/iobroker/trash-scheduler/TrashSchedulerOnlyNext';
import React, { Fragment } from 'react';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row">
        <HueBlub className="col-2" identifier="hue.0.Büro_PC_rechts" name="PC - rechts" room="Büro" />
        <HueBlub className="col-2" identifier="hue.0.Büro_PC_links" name="PC - links" room="Büro" />
      </div>
      <div className="row">
        <TrashSchedulerOnlyNext identifier="trashschedule.0" />
      </div>
    </Fragment>
  );
};

export default Landing;
