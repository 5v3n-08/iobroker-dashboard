import { Badge, Card, Col, Progress, Row, Statistic, Tabs, Tag } from 'antd';
const { TabPane } = Tabs;
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
import { useLongPress } from 'hooks/useLongPress';
import { EConsumableTitle, IRoborockConsumables, RoborockConsumables } from '../../RoborockConsumables';

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
    consumables?: EConsumableTitle[];
  };
}
export const RoborockWidgetCardFull: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, className } = props;
  // const on = useObject<boolean>(identifier);
  const battery = useObject<number>(`${identifier}.info.battery`);
  const queue = useObject<string[]>(`${identifier}.info.queue`, { toJson: true });
  // const rooms = roborockRoomIds
  const rooms = useObject<string[]>(`${identifier}.rooms`);

  console.log('writing to localStorage');
  localStorage.setItem('test', 'testValue');

  const consumables: IRoborockConsumables = {};
  // consumables
  // if (props.components?.consumables?.filter === undefined || props.components?.consumables?.filter !== false) {
  //   consumables.filter = true;
  //   // consumables.push('filter');
  // }
  // if (props.components?.consumables?.main_brush === undefined || props.components?.consumables?.main_brush !== false) {
  //   consumables.main_brush = true;
  //   // consumables.push('main_brush');
  // }
  // if (props.components?.consumables?.sensors === undefined || props.components?.consumables?.sensors !== false) {
  //   consumables.sensors = true;
  //   // consumables.push('sensors');
  // }
  // if (props.components?.consumables?.side_brush === undefined || props.components?.consumables?.side_brush !== false) {
  //   consumables.side_brush = true;
  //   // consumables.push('side_brush');
  // }
  // if (props.components?.consumables?.water_filter === undefined || props.components?.consumables?.water_filter !== false) {
  //   consumables.water_filter = true;
  //   // consumables.push('water_filter');
  // }
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
    <Badge.Ribbon
      text={
        <Fragment>
          <FontAwesomeIcon icon={['fas', 'battery-full']} /> {battery.value} %
        </Fragment>
      }
      color={battery.value <= 10 ? 'red' : battery.value < 20 ? 'yellow' : 'primary'}
      placement="start"
    >
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
        <Tabs type="card" centered>
          <TabPane tab="Control" key="control">
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
          </TabPane>
          <TabPane tab="History" key="history">
            <Row className="mt-4">
              {(props.components?.maintenance === undefined || props.components.maintenance !== false) && (
                <Col>
                  <RoborockConsumables consumables={props.components?.consumables} identifier={identifier} />
                  {/* <Card title="Wartung" size="small"> */}
                  {consumFilter.value <= 10 && (
                    <div>
                      <div className="small text-muted">Filter</div>
                      <Progress
                        percent={consumFilter.value}
                        size="small"
                        strokeColor={{
                          '0%': '#FF0000',
                          '50%': '#ffc107',
                          '100%': '#87d068',
                        }}
                      />
                    </div>
                  )}
                  {consumMain.value <= 10 && (
                    <div>
                      <div className="small text-muted">Hauptbürste</div>
                      <Progress
                        percent={consumMain.value}
                        size="small"
                        strokeColor={{
                          '0%': '#FF0000',
                          '50%': '#ffc107',
                          '100%': '#87d068',
                        }}
                      />
                    </div>
                  )}
                  {consumSensors.value <= 10 && (
                    <div>
                      <div className="small text-muted">Sensoren</div>
                      <Progress
                        percent={consumSensors.value}
                        size="small"
                        strokeColor={{
                          '0%': '#FF0000',
                          '50%': '#ffc107',
                          '100%': '#87d068',
                        }}
                      />
                    </div>
                  )}
                  {consumSideBrush.value <= 10 && (
                    <div>
                      <div className="small text-muted">Seitenbürste</div>
                      <Progress
                        percent={consumSideBrush.value}
                        size="small"
                        strokeColor={{
                          '0%': '#FF0000',
                          '50%': '#ffc107',
                          '100%': '#87d068',
                        }}
                      />
                    </div>
                  )}
                  {consumWaterFilter.value <= 10 && (
                    <div>
                      <div className="small text-muted">Wasser Filter</div>
                      <Progress
                        percent={consumWaterFilter.value}
                        size="small"
                        strokeColor={{
                          '0%': '#FF0000',
                          '50%': '#ffc107',
                          '100%': '#87d068',
                        }}
                      />
                    </div>
                  )}
                  {/* </Card> */}
                </Col>
              )}
              {(props.components?.statistics === undefined || props.components.statistics !== false) && (
                <Col className="ml-5">
                  <div>
                    <div className="small text-muted">Reinigungen</div>
                    <div>{historyTotalCleanups.value}</div>
                  </div>
                  <div>
                    <div className="small text-muted">Zeit</div>
                    <div>{historyTotalTime.value}</div>
                  </div>
                  <div>
                    <div className="small text-muted">Gereinigt</div>
                    <div>{historyTotalArea.value}</div>
                  </div>
                  {/*
                  <Card title="Statistiken" size="small">
                    <Statistic title="Reinigungen" value={historyTotalCleanups.value} />
                    <Statistic title="Zeit" value={historyTotalTime.value} suffix=" Stunden" />
                    <Statistic title="Gereinigt" value={historyTotalArea.value} suffix=" m2" />
                  </Card> */}
                </Col>
              )}
            </Row>
          </TabPane>
        </Tabs>
        {/* {_.size(rooms) === 0} ({' '}
        <Alert message="No Rooms are defined!" type="warning"></Alert>) roomIds */}
      </Card>
    </Badge.Ribbon>
  );
};
