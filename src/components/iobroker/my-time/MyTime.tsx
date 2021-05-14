import { useObject } from 'hooks/useObject';
import moment from 'moment';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Card } from 'semantic-ui-react';
import washingMachine from './svg/washing-machine.svg';

interface IProps {
  identifier: string;
  style?: React.CSSProperties;
  className?: string;
}
export const MyTime: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier } = props;
  const action = useObject<string>(`${identifier}.action`);
  // const name = useObject<string>(`${identifier}.name`);
  const cmd = useObject<string>(`${identifier}.cmd`);
  const end = useObject<number>(`${identifier}.end`);

  const [current, setCurrent] = useState<number>(0);
  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (action.value === 'run') {
      interval.current && clearInterval(interval.current);
      setCurrent(moment(moment.utc(end.value).valueOf() - moment().valueOf()).unix());
      interval.current = setInterval(() => {
        setCurrent((prev) => prev - 1);
      }, 1000);
    } else {
      interval.current && clearInterval(interval.current);
    }

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [action.value, end.value]);

  const onCardClick = () => {
    if (action.value === 'stop') cmd.setValue('start');
    if (action.value === 'run') cmd.setValue('stop');
    if (action.value === 'end') cmd.setValue('stop');
  };

  const hours = useCallback(() => {
    const hours = ~~(current / 3600);
    return hours > 9 ? `${hours}` : `0${hours}`;
  }, [current]);

  const minutes = useCallback(() => {
    const minutes = ~~((current % 3600) / 60);
    return minutes > 9 ? `${minutes}` : `0${minutes}`;
  }, [current]);

  const seconds = useCallback(() => {
    const seconds = ~~current % 60;
    return seconds > 9 ? `${seconds}` : `0${seconds}`;
  }, [current]);

  return (
    <Card className={[props.className].join(' ')} style={{ ...props.style }} onClick={onCardClick}>
      <Card.Content className="d-flex align-items-center justify-content-center">
        {action.value === 'stop' && (
          <div className="text-center">
            <img src={washingMachine} width={75} height={75} />
            <div className="small text-muted mt-2">Tippe um einen Timer zu starten.</div>
          </div>
        )}
        {action.value === 'run' && (
          <div className="text-center">
            <img src={washingMachine} width={50} height={50} />
            <h1 className="mt-2 font-weight-bold">
              {hours()}:{minutes()}:{seconds()}
            </h1>
          </div>
        )}
        {action.value === 'end' && (
          <div className="text-center">
            <img src={washingMachine} width={50} height={50} />
            <h1 className="mt-2 font-weight-bold">FERTIG!</h1>
          </div>
        )}
      </Card.Content>
    </Card>
  );
};
