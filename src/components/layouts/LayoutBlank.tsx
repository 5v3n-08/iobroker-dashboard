import React, { Fragment, FunctionComponent, PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren<any> {}
export const LayoutBlank: FunctionComponent = (props: IProps) => {
  return <Fragment>{props.children}</Fragment>;
};
