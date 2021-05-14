import { Badge } from 'antd';
import { useWebsocket } from 'hooks/useWebsocket';
import React, { Fragment } from 'react';

interface IProps {}
export const WebsocketStatus: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { isConnected } = useWebsocket();

  return (
    <Fragment>
      <Badge status={isConnected ? 'success' : 'error'} />
    </Fragment>
  );
};
