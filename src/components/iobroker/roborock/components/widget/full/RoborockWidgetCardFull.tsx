import { Badge, Card, Col, Row } from 'antd';
const { Meta } = Card;
import React, { Fragment, useEffect } from 'react';
import { useObject } from 'hooks/useObject';
import { ReactSVG } from 'react-svg';
import vacuum from 'components/iobroker/roborock/assets/icons/vacuum-cleaner.svg';
import { Link } from 'react-router-dom';
import { RoborockFanPower } from './components/FanPower';
import { roborockRoomIds } from 'configOverrides/roborock.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

interface IProps {
  title?: string;
  icon?: boolean;
  room?: string;
  identifier: string;
  className?: string;
  extended?: boolean;
  components?: {
    fan?: boolean;
    tasks?: boolean;
  };
}
export const RoborockWidgetCardFull: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, className } = props;
  // const on = useObject<boolean>(identifier);
  const battery = useObject<number>(`${identifier}.info.battery`);
  const queue = useObject<string[]>(`${identifier}.info.queue`);
  // const rooms = roborockRoomIds
  const rooms = useObject<string[]>(`${identifier}.rooms`);
  console.log('rooms');
  console.log(queue.value);

  return (
    <Badge.Ribbon text={battery.value + '%'} color={battery.value <= 10 ? 'red' : battery.value < 20 ? 'yellow' : 'primary'} placement="start">
      <Card className={[className, 'text-center'].join(' ')}>
        <Row>
          <Col>
            <Meta
              avatar={<ReactSVG className="d-flex align-items-center" style={{ width: '50px' }} src={vacuum} />}
              title={props.title ?? 'Roborock'}
              description={props.room}
            />
            {(props.components?.fan === undefined || props.components.fan !== false) && (
              <RoborockFanPower identifier={identifier + '.control.fan_power'} />
            )}
          </Col>
          <Col className="ml-2">
            {(props.components?.tasks === undefined || props.components.tasks !== false) && (
              <Card title="Aufgaben" size="small">
                {_.size(queue.value) > 0 ? _.size(queue.value) : <FontAwesomeIcon icon={['fas', 'check']} />}
              </Card>
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Card title="Wartung" size="small">
              test
            </Card>
          </Col>
          <Col>
            <Card title="Statistiken" size="small">
              test
            </Card>
          </Col>
        </Row>
        {/* {_.size(rooms) === 0} ({' '}
        <Alert message="No Rooms are defined!" type="warning"></Alert>) roomIds */}
      </Card>
    </Badge.Ribbon>
  );
};
