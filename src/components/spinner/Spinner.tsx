import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface IProps {
  size?: number;
  className?: string;
}
export const Spinner: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <Spin className={props.className} indicator={<LoadingOutlined style={{ fontSize: props.size ?? 24 }} spin />} />;
};
