import IStore from 'models/interfaces/IStore';
import { createSelector, ParametricSelector } from 'reselect';
import IRequestingState from '../models/IRequestingState';

const _selectRequesting = (requestingState: IRequestingState, actionTypes: string[]): boolean => {
  return actionTypes.some((actionType: string) => requestingState[actionType]);
};

export const selectRequesting: ParametricSelector<IStore, string[], boolean> = createSelector(
  (state: IStore) => state.requesting,
  (state: IStore, actionTypes: string[]) => actionTypes,
  _selectRequesting
);

const _selectRequestingById = (requestingState: IRequestingState, actionTypes: { type: string; id: string }): boolean => {
  return requestingState[`${actionTypes.type}_${actionTypes.id}`] ?? false;
};
export const selectRequestingById: ParametricSelector<IStore, { type: string; id: string }, boolean> = createSelector(
  (state: IStore) => state.requesting,
  (state: IStore, actionTypes: { type: string; id: string }) => actionTypes,
  _selectRequestingById
);
