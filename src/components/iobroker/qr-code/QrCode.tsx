import QRCode from 'qrcode.react';
import React from 'react';
import { Card } from 'semantic-ui-react';

//? ----- Documentation for QR - Code values: -----
//? https://github.com/zxing/zxing/wiki/Barcode-Contents#wi-fi-network-config-android-ios-11

interface IProps {
  title?: string;
  value: string;
  className?: string;
}
export const QrCode: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Card className={props.className}>
      <Card.Content textAlign="center">
        {props.title && <h3 className="font-weight-bold">{props.title}</h3>}
        <QRCode value={props.value} />
      </Card.Content>
    </Card>
  );
};
