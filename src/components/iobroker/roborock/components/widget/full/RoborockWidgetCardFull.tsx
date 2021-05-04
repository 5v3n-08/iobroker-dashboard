import { Badge, Card, Col, Progress, Row, Statistic, Tag } from 'antd';
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
import { CaretRightOutlined, PauseOutlined, HomeOutlined } from '@ant-design/icons';

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
    maintenance?: boolean;
    statistics?: boolean;
    actions?: boolean;
  };
}
export const RoborockWidgetCardFull: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, className } = props;
  // const on = useObject<boolean>(identifier);
  const battery = useObject<number>(`${identifier}.info.battery`);
  const queue = useObject<string[]>(`${identifier}.info.queue`, { toJson: true });
  // const rooms = roborockRoomIds
  const rooms = useObject<string[]>(`${identifier}.rooms`);

  // consumables
  const consumFilter = useObject<number>(`${identifier}.consumable.filter`);
  const consumMain = useObject<number>(`${identifier}.consumable.main_brush`);
  const consumSensors = useObject<number>(`${identifier}.consumable.sensors`);
  const consumSideBrush = useObject<number>(`${identifier}.consumable.side_brush`);
  const consumWaterFilter = useObject<number>(`${identifier}.consumable.water_filter`);

  // History
  const historyTotalArea = useObject<number>(`${identifier}.history.total_area`);
  const historyTotalCleanups = useObject<number>(`${identifier}.history.total_cleanups`);
  const historyTotalTime = useObject<number>(`${identifier}.history.total_time`);

  // Actions
  const cmdStart = useObject<boolean>(`${identifier}.control.start`);
  const cmdPause = useObject<boolean>(`${identifier}.control.pause`);
  const cmdHome = useObject<boolean>(`${identifier}.control.home`);

  return (
    <Badge.Ribbon text={battery.value + '%'} color={battery.value <= 10 ? 'red' : battery.value < 20 ? 'yellow' : 'primary'} placement="start">
      <Card
        className={[className, 'text-center'].join(' ')}
        actions={
          props.components?.actions === undefined || props.components.actions !== false
            ? [
                <CaretRightOutlined key="start" onClick={() => cmdStart.setValue(true)} />,
                <PauseOutlined key="pause" onClick={() => cmdPause.setValue(true)} />,
                <HomeOutlined key="home" onClick={() => cmdHome.setValue(true)} />,
              ]
            : undefined
        }
      >
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
          <Col className="ml-5">
            {(props.components?.tasks === undefined || props.components.tasks !== false) && (
              <Badge.Ribbon text={_.size(queue.value)}>
                <Card title={_.size(queue.value) > 0 ? 'Aufgaben' : undefined}>
                  {_.size(queue.value) === 0 ? 'Aufgaben' : undefined}
                  {queue.value?.map((segment, i) => (
                    <Tag key={'segment_' + i} color="processing">
                      {segment.replace('segment ', '')}
                    </Tag>
                  ))}
                  {/* {_.size(queue.value) > 0 ? _.size(queue.value) : <FontAwesomeIcon icon={['fas', 'check']} />} */}
                </Card>
              </Badge.Ribbon>
            )}
          </Col>
        </Row>
        <Row className="mt-4">
          {(props.components?.maintenance === undefined || props.components.maintenance !== false) && (
            <Col>
              <Card title="Wartung" size="small">
                <div>
                  Filter
                  <br />
                  <Progress percent={consumFilter.value} size="small" />
                </div>
                <div>
                  Hauptbürste
                  <br />
                  <Progress type="circle" percent={consumMain.value} width={50} />
                </div>
                <Statistic title="Sensoren" value={consumSensors.value} suffix="%" />
                <div>
                  Seitenbürste
                  <br />
                  <Progress
                    percent={consumSideBrush.value}
                    size="small"
                    strokeColor={{
                      '0%': '#FF0000',
                      '100%': '#87d068',
                    }}
                  />
                </div>
                <div>
                  Wasser Filter
                  <br />
                  <Progress
                    percent={consumWaterFilter.value}
                    size="small"
                    strokeColor={{
                      '0%': '#FF0000',
                      '100%': '#87d068',
                    }}
                  />
                </div>
              </Card>
            </Col>
          )}
          {(props.components?.statistics === undefined || props.components.statistics !== false) && (
            <Col className="ml-3">
              <Card title="Statistiken" size="small">
                <Statistic title="Reinigungen" value={historyTotalCleanups.value} />
                <Statistic title="Zeit" value={historyTotalTime.value} suffix=" Stunden" />
                <Statistic title="Gereinigt" value={historyTotalArea.value} suffix=" m2" />
              </Card>
            </Col>
          )}
        </Row>
        {/* {_.size(rooms) === 0} ({' '}
        <Alert message="No Rooms are defined!" type="warning"></Alert>) roomIds */}
      </Card>
    </Badge.Ribbon>
  );
};
