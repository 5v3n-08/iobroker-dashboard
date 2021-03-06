import HttpErrorResponseModel from 'models/interfaces/HttpErrorResponseModel';
import IAction from '../../models/interfaces/IAction';
import * as ActionUtility from '../../utilities/ActionUtility';

export const REMOVE: string = 'ErrorAction.REMOVE';
export const removeById = (id: string): IAction<string> => {
  return ActionUtility.createAction(REMOVE, id);
};

export const CLEAR_ALL: string = 'ErrorAction.CLEAR_ALL';
export const clearAll = (): IAction<undefined> => {
  return ActionUtility.createAction(CLEAR_ALL);
};

export const ADD_MANUAL_ERROR: string = 'ErrorAction.ADD_MANUAL_ERROR';
export const addManualError = (error: HttpErrorResponseModel): IAction<HttpErrorResponseModel> => {
  return ActionUtility.createAction(ADD_MANUAL_ERROR, error);
};
