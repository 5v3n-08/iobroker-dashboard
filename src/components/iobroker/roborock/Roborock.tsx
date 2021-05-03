import { Card } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useObject } from 'hooks/useObject';
import { ReactSVG } from 'react-svg';
import vacuum from './assets/icons/vacuum-cleaner.svg';
import { Link, useHistory } from 'react-router-dom';
import { RoborockWidgetCardSmall } from './components/widget/small/RoborockWidgetCardSmall';
import { RoborockModal } from './components/RoborockModal';
import { RoborockWidgetCardFull } from './components/widget/full/RoborockWidgetCardFull';

interface IProps {
  widget: 'small' | 'extended' | 'full';
  openType: 'modal' | 'page';
  icon?: boolean;
  iconSvgSrc?: string;
  title?: string;
  room?: string;
  identifier: string;
  className?: string;
}
export const Roborock: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, className } = props;
  //   const on = useObject<boolean>(identifier);

  return (
    <Fragment>
      {props.widget === 'small' && (
        <RoborockWidgetCardSmall identifier={identifier} openType={props.openType} title={props.title} room={props.room} />
      )}
      {props.widget === 'extended' && (
        <RoborockWidgetCardSmall extended identifier={identifier} openType={props.openType} title={props.title} room={props.room} />
      )}
      {props.widget === 'full' && <RoborockWidgetCardFull identifier={identifier} title={props.title} room={props.room} />}
    </Fragment>
  );
};
