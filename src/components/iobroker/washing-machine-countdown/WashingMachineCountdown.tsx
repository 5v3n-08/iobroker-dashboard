import { Card } from 'antd';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { ETimerStatus, useTimer } from '../../../hooks/useTimer';
import washingMachine from './svg/washing-machine.svg';

interface IProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  name?: string;
  className?: string;
}
export const WashingMachineCountdown: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { hours, minutes, seconds, start, cancel, status } = useTimer({ hours: props.hours, minutes: props.minutes, seconds: props.seconds });

  const onCardClick = () => {
    if (status === ETimerStatus.initial) start();
    if (status === ETimerStatus.running) cancel();
    if (status === ETimerStatus.finished) cancel();
  };

  return (
    <Card
      className={[props.className, 'd-flex align-items-center'].join(' ')}
      style={{ width: 200, height: 150 }}
      bodyStyle={{ padding: '0.75rem 2rem', alignContent: 'center', width: '100%' }}
      onClick={onCardClick}
    >
      <div className="text-center">
        {status === ETimerStatus.initial && (
          <Fragment>
            <img src={washingMachine} width={75} height={75} />
            <div className="small text-muted mt-2">Tippe um einen Timer zu starten.</div>
          </Fragment>
        )}

        {status === ETimerStatus.running && (
          <Fragment>
            <img src={washingMachine} width={50} height={50} />
            <h1 className="mt-2 font-weight-bold">
              {hours}:{minutes}:{seconds}
            </h1>
          </Fragment>
        )}
        {status === ETimerStatus.finished && (
          <Fragment>
            <img src={washingMachine} width={50} height={50} />
            <h1 className="mt-2 font-weight-bold">FERTIG !</h1>
          </Fragment>
        )}
      </div>

      {/* <h3 className="mt-2 font-weight-bold">
        {hours}:{minutes}:{seconds}
      </h3> */}
      {/* // {isRunning ? 'y' : 'n'} */}
      {/* // <button onClick={() => start()}>start</button> */}
    </Card>
  );
};
