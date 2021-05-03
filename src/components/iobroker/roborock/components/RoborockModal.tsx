import { Card } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useObject } from 'hooks/useObject';
import { ReactSVG } from 'react-svg';
import vacuum from 'components/iobroker/roborock/assets/icons/vacuum-cleaner.svg';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'semantic-ui-react';

interface IProps {
  title?: string;
  icon?: boolean;
  room?: string;
  identifier: string;
  className?: string;
  extended?: boolean;
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
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
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
