/* eslint-disable react/jsx-no-undef */
import { HueLamp } from 'components/iobroker/hue-lamp/HueLamp';
import { TrashSchedulerOnlyNext } from 'components/iobroker/trash-scheduler/TrashSchedulerOnlyNext';
import React, { Fragment } from 'react';
import { MyTime } from 'components/iobroker/my-time/MyTime';
import GridLayout from 'react-grid-layout';
import { QrCode } from 'components/iobroker/qr-code/QrCode';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <GridLayout width={1225} cols={12} rowHeight={10}>
      <div key="item-1" data-grid={{ x: 0, y: 0, w: 2, h: 6, static: true }}>
        <TrashSchedulerOnlyNext identifier="trashschedule.0" />
      </div>
      <div key="item-4" data-grid={{ x: 2, y: 0, w: 2, h: 6, static: true }}>
        <HueLamp name="Flur" identifier="hue.0.Flur" />
      </div>
      <div key="item-2" data-grid={{ x: 10, y: 0, w: 2, h: 10, static: true }}>
        <QrCode title="W-LAN:" value={process.env.REACT_APP_WIFI_QR_CODE ?? 'ERROR'} />
      </div>

      <div key="item-3" data-grid={{ x: 0, y: 6, w: 3, h: 6, static: true }}>
        <MyTime identifier="mytime.0.Countdown.Waschmaschine" />
      </div>
    </GridLayout>
  );
};

export default Landing;
