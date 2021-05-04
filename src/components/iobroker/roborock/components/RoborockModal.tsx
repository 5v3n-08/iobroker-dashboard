import { Card } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useObject } from 'hooks/useObject';
import { ReactSVG } from 'react-svg';
import vacuum from 'components/iobroker/roborock/assets/icons/vacuum-cleaner.svg';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'semantic-ui-react';
import { RoborockWidgetCardFull } from './widget/full/RoborockWidgetCardFull';

interface IProps {
  title?: string;
  room?: string;
  identifier: string;
  className?: string;
  hideModal?(): void;
  isModalVisible: boolean;
}
export const RoborockModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, className } = props;

  //   const showModal = () => {
  //   };

  const handleOk = () => {
    props.hideModal ? props.hideModal() : null;
  };

  const handleCancel = () => {
    props.hideModal ? props.hideModal() : null;
    //     onClick={() => (props.onReplayClick ? props.onReplayClick(user.id) : null)}
  };
  return (
    <Fragment>
      <Modal title="Basic Modal" open={props.isModalVisible} onClose={handleCancel} size="small">
        <Modal.Content>
          <RoborockWidgetCardFull identifier={identifier} title={props.title} room={props.room} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={handleCancel}>
            No
          </Button>
          <Button color="green" onClick={handleCancel}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Fragment>
  );
};
