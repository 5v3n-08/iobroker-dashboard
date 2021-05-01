import { Card } from 'antd';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWebsocket } from 'hooks/useWebsocket';
import { useObject } from 'hooks/useObject';
import { ReactSVG } from 'react-svg';
import lightbulbOn from 'assets/svg/lightbulb_on.svg';
import lightbulbOff from 'assets/svg/lightbulb_off.svg';

interface IProps {
  name: string;
  room?: string;
  identifier: string;
  className?: string;
}
export const HueLamp: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, className } = props;
  const on = useObject<boolean>(`${identifier}.on`);
  const bri = useObject<number>(`${identifier}.bri`);

  return (
    <Card className={[className, 'text-center'].join(' ')} onClick={() => on.setValue(!on.value)}>
      <small className="text-muted">{props.room}</small>
      <div className="text-center">{props.name}</div>
      <ReactSVG className="d-flex align-items-center" style={{ width: '50px' }} src={on.value ? lightbulbOn : lightbulbOff} />
    </Card>
  );
};
