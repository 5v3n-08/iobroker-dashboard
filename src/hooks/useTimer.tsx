import _ from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useTimer = (props: { hours?: number; minutes?: number; seconds?: number }): ITimerReturn => {
  const time = (props.hours ?? 0) * 3600 + (props.minutes ?? 0) * 60 + (props.seconds ?? 0);
  const [status, setStatus] = useState<ETimerStatus>(ETimerStatus.initial);
  const [current, setCurrent] = useState(time);
  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (current === 0) {
      interval.current && clearInterval(interval.current);
      setStatus(ETimerStatus.finished);
    }
  }, [current]);

  const start = useCallback(() => {
    setCurrent(time);
    setStatus(ETimerStatus.running);
    interval.current && clearInterval(interval.current);
    interval.current = setInterval(() => {
      setCurrent((prev) => prev - 1);
    }, 1000);
  }, [time]);

  const cancel = useCallback(() => {
    interval.current && clearInterval(interval.current);
    setStatus(ETimerStatus.initial);
  }, []);

  const _hours = useCallback(() => {
    const hours = ~~(current / 3600);
    return hours > 9 ? `${hours}` : `0${hours}`;
  }, [current]);

  const _minutes = useCallback(() => {
    const minutes = ~~((current % 3600) / 60);
    return minutes > 9 ? `${minutes}` : `0${minutes}`;
  }, [current]);

  const _seconds = useCallback(() => {
    const seconds = ~~current % 60;
    return seconds > 9 ? `${seconds}` : `0${seconds}`;
  }, [current]);

  return { start, cancel, hours: _hours(), minutes: _minutes(), seconds: _seconds(), status };
};

interface ITimerReturn {
  start(): void;
  cancel(): void;
  hours: string;
  minutes: string;
  seconds: string;
  status: ETimerStatus;
}

export enum ETimerStatus {
  initial = 'initial',
  running = 'running',
  paused = 'paused',
  finished = 'finished',
}
