import { Card, Rate } from 'antd';
const { Meta } = Card;
import React, { useEffect } from 'react';
import { useObject } from 'hooks/useObject';
import { ReactSVG } from 'react-svg';
import vacuum from 'components/iobroker/roborock/assets/icons/vacuum-cleaner.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blue } from '@material-ui/core/colors';

interface IProps {
  identifier: string;
  icon?: boolean;
  className?: string;
}
export const RoborockFanPower: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier } = props;
  const fanPower = useObject<number>(`${identifier}.control.fan_power`);

  const handleChange = (value: number) => {
    fanPower.setValue(value + 100);
  };
  const customIcons = {
    1: (
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={['fas', 'fan']} size="lg" />
        <span className="fa-layers-text fa-inverse text-primary" data-fa-transform="shrink-4">
          1
        </span>
      </span>
    ),
    2: (
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={['fas', 'fan']} size="lg" />
        <span className="fa-layers-text fa-inverse text-primary" data-fa-transform="shrink-4">
          2
        </span>
      </span>
    ),
    3: (
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={['fas', 'fan']} size="lg" />
        <span className="fa-layers-text fa-inverse text-primary" data-fa-transform="shrink-4">
          3
        </span>
      </span>
    ),
    4: (
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={['fas', 'fan']} size="lg" />
        <span className="fa-layers-text fa-inverse text-primary" data-fa-transform="shrink-4">
          4
        </span>
      </span>
    ),
    5: <FontAwesomeIcon icon={['fas', 'tint']} />,
  };

  return (
    <Rate
      defaultValue={(fanPower.value ?? 0) - 100}
      onChange={handleChange}
      character={({ index }: { index: number }) => customIcons[index + 1]}
      allowClear={false}
      style={{ color: 'lightgrey' }}
    />
  );
};
