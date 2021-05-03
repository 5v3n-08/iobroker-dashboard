import { Card } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useObject } from 'hooks/useObject';
import { ReactSVG } from 'react-svg';
import vacuum from 'components/iobroker/roborock/assets/icons/vacuum-cleaner.svg';
import { Link, useHistory } from 'react-router-dom';
import { CaretRightOutlined, PauseOutlined, HomeOutlined } from '@ant-design/icons';
import { RoborockModal } from '../../RoborockModal';

interface IProps {
  title?: string;
  icon?: boolean;
  room?: string;
  identifier: string;
  className?: string;
  extended?: boolean;
  openType: 'modal' | 'page';
}
export const RoborockWidgetCardSmall: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, className } = props;

  const cmdStart = useObject<boolean>(`${identifier}.control.start`);
  const cmdPause = useObject<boolean>(`${identifier}.control.pause`);
  const cmdHome = useObject<boolean>(`${identifier}.control.home`);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    if (!props.extended) {
      if (props.openType === 'modal') {
        console.log('modal visible true');
        setIsModalVisible(true);
      } else {
        history.push('/roborock');
      }
    }
  };

  const hideModal = () => {
    console.log('modal visible false');
    setIsModalVisible(false);
  };
  // const on = useObject<boolean>(identifier);

  return (
    <Fragment>
      {props.openType === 'modal' && <RoborockModal identifier={identifier} hideModal={hideModal} isModalVisible={isModalVisible} />}
      <Card
        className={[className, 'text-center'].join(' ')}
        actions={
          props.extended
            ? [
                <CaretRightOutlined key="start" onClick={() => cmdStart.setValue(true)} />,
                <PauseOutlined key="pause" onClick={() => cmdPause.setValue(true)} />,
                <HomeOutlined key="home" onClick={() => cmdHome.setValue(true)} />,
              ]
            : undefined
        }
        onClick={handleClick}
        // style={{ width: 100 }}
      >
        {props.room && <small className="text-muted">{props.room}</small>}
        {props.title && <div className="text-center">{props.title ?? 'Roborock'}</div>}
        <ReactSVG className="d-flex align-items-center" style={{ width: '50px' }} src={vacuum} />
      </Card>
    </Fragment>
  );
};
