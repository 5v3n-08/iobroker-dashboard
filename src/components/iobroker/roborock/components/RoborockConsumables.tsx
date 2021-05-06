import { Progress } from 'antd';
import { useObject } from 'hooks/useObject';
import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';

interface IProps {
  identifier: string;
  consumables?: EConsumableTitle[];
}

export enum EConsumableTitle {
  filter = 'Filter',
  main_brush = 'Hauptbürste',
  sensors = 'Sensoren',
  side_brush = 'Seitenbürste',
  water_filter = 'Wasserfilter',
}

const CConsumableTitle = {
  filter: 'Filter',
  main_brush: 'Hauptbürste',
  sensors: 'Sensoren',
  side_brush: 'Seitenbürste',
  water_filter: 'Wasserfilter',
};

export const RoborockConsumables: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, consumables } = props;

  // Get consumables
  const consumFilter = useObject<number>(`${identifier}.consumable.filter`);
  const consumMainBrush = useObject<number>(`${identifier}.consumable.main_brush`);
  const consumSensors = useObject<number>(`${identifier}.consumable.sensors`);
  const consumSideBrush = useObject<number>(`${identifier}.consumable.side_brush`);
  const consumWaterFilter = useObject<number>(`${identifier}.consumable.water_filter`);

  return (
    <Fragment>
      {consumables?.join(',')}
      {/* {_.each(consumables, (active, consumableType) => {
        const consum =
          consumableType === 'filter'
            ? consumFilter
            : consumableType === 'main_brush'
            ? consumMainBrush
            : consumableType === 'sensors'
            ? consumSensors
            : consumableType === 'side_brush'
            ? consumSideBrush
            : consumWaterFilter;
        consum.value <= 10 && (
          <div>
            <div className="small text-muted">{consum.value}</div>
            <Progress
              //   percent={consum.value}
              size="small"
              strokeColor={{
                '0%': '#FF0000',
                '50%': '#ffc107',
                '100%': '#87d068',
              }}
            />
          </div>
        );
      })} */}
    </Fragment>
  );
};

export interface IRoborockConsumables {
  filter?: boolean;
  main_brush?: boolean;
  sensors?: boolean;
  side_brush?: boolean;
  water_filter?: boolean;
}
