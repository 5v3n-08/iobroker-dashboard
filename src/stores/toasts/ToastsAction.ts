import * as ActionUtility from '../../utilities/ActionUtility';
import IAction from '../../models/interfaces/IAction';
import ToastStatusEnum from '../../constants/ToastStatusEnum';
import IToast from './models/IToast';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TOAST: string = 'ToastsAction.ADD_TOAST';
export const add = (message: string, type: ToastStatusEnum, title = 'An error has occurred!'): IAction<IToast> => {
  return ActionUtility.createAction(ADD_TOAST, {
    message,
    title,
    type,
    id: uuidv4(),
  });
};

export const REMOVE_TOAST: string = 'ToastsAction.REMOVE_TOAST';
export const removeById = (toastId: string): IAction<string> => {
  return ActionUtility.createAction(REMOVE_TOAST, toastId);
};
