import { HueLamp } from 'components/iobroker/hue-lamp/HueLamp';
import { TrashSchedulerOnlyNext } from 'components/iobroker/trash-scheduler/TrashSchedulerOnlyNext';
import React, { Fragment } from 'react';
import { MyTime } from 'components/iobroker/my-time/MyTime';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row m-2">
        <TrashSchedulerOnlyNext className="mx-1" identifier="trashschedule.0" />
        <HueLamp className="mx-1" name="Flur" identifier="hue.0.Flur" />
      </div>
      <div className="row  m-2">
        <MyTime identifier="mytime.0.Countdown.Waschmaschine" />
      </div>
    </Fragment>
  );
};

export default Landing;
