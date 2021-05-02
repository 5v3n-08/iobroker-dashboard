import React, { useEffect } from 'react';
import { useObject } from 'hooks/useObject';
import lightbulbOn from 'assets/svg/lightbulb_on.svg';
import lightbulbOff from 'assets/svg/lightbulb_off.svg';
import { Avatar, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useLongPress } from 'hooks/useLongPress';

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

  const onLongPress = () => {
    console.log('long pressed');
  };
  const onClick = () => {
    on.setValue(!on.value);
  };
  const longPressEvent = useLongPress(onClick, onLongPress, {
    shouldPreventDefault: true,
    delay: 300,
  });

  return (
    <Card
      // onClick={(e) => on.setValue(!on.value)}
      {...longPressEvent}
      cover={<img className="text-center" src={lightbulbOn} style={{ height: 50, width: 50 }} />}
      actions={[<span key="1">Test1</span>, <span key="2">Test1</span>]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};
