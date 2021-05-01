import React, { Fragment, useCallback } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import IToast from 'stores/toasts/models/IToast';
import IStore from 'models/interfaces/IStore';
import { Dispatch } from 'redux';
import * as ToastsAction from 'stores/toasts/ToastsAction';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

interface IProps {}
export const ErrorSnackbar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();
  const toasts: IToast[] = useSelector((state: IStore) => state.toasts.items);

  const onClickRemoveNotification = useCallback(
    (id: string): void => {
      dispatch(ToastsAction.removeById(id));
    },
    [dispatch]
  );

  return (
    <Fragment>
      {toasts.map((error) => (
        <Snackbar key={error.id} open={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert severity="error" className="text-center" onClose={() => onClickRemoveNotification(error.id)}>
            <div className="mx-3">
              <strong>{error.title}</strong>
              <br />
              <small>{error.message}</small>
            </div>
          </Alert>
        </Snackbar>
      ))}
    </Fragment>
  );
};
