import React, { Fragment, useEffect, useState } from 'react';
import { useObject } from 'hooks/useObject';
import lightbulbOn from 'assets/svg/lightbulb_on.svg';
import lightbulbOff from 'assets/svg/lightbulb_off.svg';
import { Avatar, Card, List, Modal, Slider } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useLongPress } from 'hooks/useLongPress';
import { Button } from 'semantic-ui-react';
import _ from 'lodash';

interface IProps {
  identifier: string;
  project: string;
  title?: string;
  className?: string;
}
export const Todoist: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { identifier, project } = props;
  const tasks = useObject<ITask[] | undefined>(`${identifier}.JSON.Projects-JSON.${project}`);

  console.log(tasks);

  return (
    <Fragment>
      <Card className={props.className} bodyStyle={{ padding: '0.75rem 2rem' }}>
        {tasks.value && <List bordered dataSource={tasks.value} renderItem={(item) => <List.Item>{item.Task}</List.Item>} />}
      </Card>
    </Fragment>
  );
};

interface ITask {
  ID: string;
  Task: string;
}
