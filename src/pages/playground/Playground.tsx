import React, { Fragment } from 'react';
import { QrCode } from 'components/iobroker/qr-code/QrCode';
import GridLayout from 'react-grid-layout';

interface IProps {}
const Playground: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <GridLayout width={1225} cols={12} rowHeight={10}>
        <div key="item-1" data-grid={{ x: 0, y: 0, w: 2, h: 10, static: true }}>
          <QrCode title="W-LAN 1:" value="1sdfgsdfnoasdfgnasdofgbsahofugbaofugbasdhofgbds" />
        </div>
        <div key="placeholder-1" className="bg-danger" data-grid={{ x: 5, y: 0, w: 2, h: 10 }}></div>
        <div key="item-2" data-grid={{ x: 10, y: 0, w: 2, h: 10, static: true }}>
          <QrCode title="W-LAN 2:" value="1sdfgsdfnoasdfgnasdofgbsahofugbaofugbasdhofgbds" />
        </div>
      </GridLayout>
    </Fragment>
  );
};

export default Playground;
