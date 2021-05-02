import { HueLamp } from 'components/iobroker/hue-lamp/HueLamp';
import React, { Fragment } from 'react';

interface IProps {}
const Landing: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Fragment>
      <div className="row">
        <HueLamp identifier="hue.0.Büro_PC_rechts" name="PC - rechts" room="Büro" />
        <HueLamp identifier="hue.0.Büro_PC_links" name="PC - links" room="Büro" />
      </div>
    </Fragment>
  );
};

export default Landing;
