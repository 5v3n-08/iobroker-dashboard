import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import Moment from 'react-moment';

interface IProps {
  format?: string;
  refreshEverySeconds?: number;
  size?: string;
  color?: string;
}
export const Clock: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    if (props.refreshEverySeconds) {
      const timer = setTimeout(() => {
        setTime(new Date());
      }, props.refreshEverySeconds * 1000);
      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  });
  return (
    <Fragment>
      <Moment
        format={props.format ?? 'dddd, DD.MM.YYYY'}
        locale="de"
        style={{ fontSize: props.size ? props.size + 'rem' : '2rem', color: props.color ?? 'white' }}
      >
        {time}
      </Moment>
    </Fragment>
  );
};
