import { HueLamp } from 'components/iobroker/hue-lamp/HueLamp';
import { PowerSwitch } from 'components/iobroker/power-switch/PowerSwitch';
import { WashingMachineCountdown } from 'components/iobroker/washing-machine-countdown/WashingMachineCountdown';
import { TrashSchedulerOnlyNext } from 'components/iobroker/trash-scheduler/TrashSchedulerOnlyNext';
import React, { Fragment } from 'react';
import { MyTime } from 'components/iobroker/my-time/MyTime';
import { Todoist } from 'components/iobroker/todoist/Todoist';
import { WebsocketStatus } from 'components/websocket-status/WebsocketStatus';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row mb-2">
        <TrashSchedulerOnlyNext identifier="trashschedule.0" />
        <Todoist className="col-5" identifier="todoist2.0" project="Inbox" />
      </div>
      <div className="row">
        <WashingMachineCountdown name="Waschmaschiene" hours={3} minutes={30} />
        <MyTime identifier="mytime.0.Countdown.test" />
        <WebsocketStatus />
      </div>
    </Fragment>
  );
};

export default Landing;
