import { ReduxDispatch } from '../models/interfaces/ReduxProps';
import HttpErrorResponseModel from '../models/interfaces/HttpErrorResponseModel';
import IAction from '../models/interfaces/IAction';

export const createThunkEffect = async <P>(
  dispatch: ReduxDispatch<undefined | P | HttpErrorResponseModel>,
  actionType: string,
  effect: (...args: any[]) => Promise<P | HttpErrorResponseModel>,
  ...args: any[]
): Promise<P | HttpErrorResponseModel> => {
  dispatch(createAction<undefined>(actionType));

  const model: P | HttpErrorResponseModel = await effect(...args);
  const isError: boolean = model instanceof HttpErrorResponseModel;

  dispatch(createAction<P | HttpErrorResponseModel>(`${actionType}_FINISHED`, model, isError));

  return model;
};

export const createAction = <T = undefined>(type: string, payload?: T, error: boolean = false, meta: any = null): IAction<T> => {
  return { type, payload, error, meta };
};
