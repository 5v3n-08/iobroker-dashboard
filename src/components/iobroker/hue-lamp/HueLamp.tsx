import React, { Fragment, useEffect, useState } from 'react';
import { useObject } from 'hooks/useObject';
import lightbulbOn from 'assets/svg/lightbulb_on.svg';
import lightbulbOff from 'assets/svg/lightbulb_off.svg';
import { Modal, Slider } from 'antd';
import { useLongPress } from 'hooks/useLongPress';
import { Button, Card } from 'semantic-ui-react';
import _ from 'lodash';

interface IProps {
  name: string;
  room?: string;
  identifier: string;
  className?: string;
}
export const HueLamp: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [brightness, setBrightness] = useState(0);
  const on = useObject<boolean>(`${identifier}.on`);
  const level = useObject<number>(`${identifier}.level`);

  const levelValue = level.value;
  useEffect(() => {
    setBrightness(levelValue ?? 0);
  }, [levelValue]);

  const longPressEvent = useLongPress(
    (e) => on.setValue(!on.value),
    () => setModalOpen(true),
    {
      shouldPreventDefault: true,
      delay: 300,
    }
  );

  return (
    <Fragment>
      <Card className={[props.className, 'default-grid-card'].join(' ')} {...longPressEvent}>
        <Card.Content>
          <div className="text-center small text-muted">{props.room}</div>
          <div className="text-center small">{props.name}</div>
          <div className="text-center my-2">
            <img src={on.value ? lightbulbOn : lightbulbOff} style={{ height: 50, width: 50 }} />
          </div>
        </Card.Content>
      </Card>
      <Modal title={<div className="text-center">{`${props.name}`}</div>} visible={isModalOpen} footer={false} onCancel={() => setModalOpen(false)}>
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <img src={on.value ? lightbulbOn : lightbulbOff} style={{ height: 125, width: 125 }} onClick={() => on.setValue(!on.value)} />
            <div className="mt-3">
              <Button.Group widths="1">
                <Button disabled={on.value} onClick={() => on.setValue(true)}>
                  An
                </Button>
                <Button disabled={!on.value} onClick={() => on.setValue(false)}>
                  Aus
                </Button>
              </Button.Group>
            </div>
          </div>

          <Slider
            className="ml-5 mt-2"
            vertical
            value={brightness}
            min={0}
            max={100}
            marks={{ 0: '0%', 100: '100%' }}
            onChange={(value: number) => setBrightness(value)}
            onAfterChange={(value: number) => level.setValue(value)}
            style={{ display: 'inline-block', height: 150 }}
          />
        </div>
      </Modal>
    </Fragment>
  );
};
