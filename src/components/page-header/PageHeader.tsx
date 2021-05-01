import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

interface IProps {
  title: string;
  subtitle?: string;
  options?: IOptions;
  isBack?: boolean;
  backUrl?: string;
}
export const PageHeader: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const history = useHistory();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const subtitleJSX = props.subtitle ? <small className="text-muted">{props.subtitle}</small> : null;

  return (
    <div className="row mb-3">
      {props.isBack && <Button icon={<FontAwesomeIcon icon="arrow-left" />} onClick={() => history.goBack()} />}
      <div className="text-center col">
        <h4 className="mb-1">{props.title}</h4>
        {subtitleJSX}
      </div>
      <div className="col-2 d-flex justify-content-end">
        {props.options?.drawer && (
          <Fragment>
            <Button icon={<FontAwesomeIcon icon="cog" />} onClick={() => setDrawerOpen(true)} />
            <Drawer
              title={props.options.drawer.title ?? 'Settings'}
              placement={props.options.drawer.placement}
              width={props.options.drawer.width}
              visible={isDrawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              {props.options?.drawer.component}
            </Drawer>
          </Fragment>
        )}
      </div>
    </div>
  );
};

interface IOptions {
  drawer: { component: React.ReactNode; title?: React.ReactNode | string; placement?: 'top' | 'right' | 'bottom' | 'left'; width?: number };
}
