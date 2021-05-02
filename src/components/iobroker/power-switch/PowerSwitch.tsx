import { Card } from 'antd';
import { useObject } from 'hooks/useObject';
import React from 'react';

import lightbulbOn from 'assets/svg/lightbulb_on.svg';
import lightbulbOff from 'assets/svg/lightbulb_off.svg';
import switchOn from 'assets/svg/switch_on.svg';
import switchOff from 'assets/svg/switch_off.svg';

interface IProps {
  name: string;
  room?: string;
  iconSet?: TIconSetTypes;
  identifier: string;
  className?: string;
}
export const PowerSwitch: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier } = props;
  const iconSet = iconSets[props.iconSet ?? 'lamp'];
  const on = useObject<boolean>(`${identifier}`);

  return (
    <Card className={props.className} bodyStyle={{ padding: '0.75rem 2rem' }} onClick={() => on.setValue(!on.value)}>
      <div className="text-center small text-muted">{props.room}</div>
      <div className="text-center small">{props.name}</div>
      <div className="text-center my-2">
        <img src={on.value ? iconSet.icons.on : iconSet.icons.off} style={{ height: iconSet.size, width: iconSet.size }} />
      </div>
    </Card>
  );
};

const iconSets: { [key in TIconSetTypes]: IIconSetItem } = {
  lamp: { icons: { on: lightbulbOn, off: lightbulbOff }, size: 50 },
  switch: { icons: { on: switchOn, off: switchOff }, size: 50 },
};

type TIconSetTypes = 'lamp' | 'switch';
interface IIconSetItem {
  icons: { on: string; off: string };
  size: number;
}
