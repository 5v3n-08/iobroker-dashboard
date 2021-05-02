import { Card } from 'antd';
import { useObject } from 'hooks/useObject';
import React from 'react';
import { findTrashType, trashImages } from './TrashHelper';
import _ from 'lodash';
import moment from 'moment';

interface IProps {
  identifier: string;
  className?: string;
}
export const TrashSchedulerOnlyNext: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier } = props;
  const date = useObject<string>(`${identifier}.next.dateFormat`);
  const daysLeft = useObject<number>(`${identifier}.next.daysLeft`);
  const types = useObject<string>(`${identifier}.next.types`);

  const trashTypes = findTrashType(types.value);
  const daysLeftText = () => {
    if (daysLeft.value == 0) return 'Heute';
    if (daysLeft.value == 1) return 'Morgen';
    if (daysLeft.value <= 7) return moment(date.value).format('dddd');
    return moment(date.value).format('DD.MM.YYYY');
  };

  return (
    <Card className={['text-center', daysLeft.value <= 1 ? 'border-danger' : null].join(' ')} bodyStyle={{ padding: '0.75rem 1rem' }}>
      <div className="small text-muted">Nächste Abholung:</div>
      <span>{daysLeftText()}</span>
      <div className="mt-3 d-flex justify-content-center">
        {trashTypes.map((type) => (
          <div key={type}>
            <img width={40} src={trashImages[type]} alt="" />
          </div>
        ))}
      </div>
    </Card>
  );
};
