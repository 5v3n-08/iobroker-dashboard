import { Reducer } from 'redux';
import baseReducer from 'utilities/BaseReducer';
import IAction from 'models/interfaces/IAction';
import ObjectsAction from './actions/ObjectsAction';
import ObjectModel from 'models/ObjectModel';
import IObjectsState from './models/IObjectsState';

export const initialState: IObjectsState = {};

const objectsReducer: Reducer = baseReducer(initialState, {
  [ObjectsAction.STORE_OBJECT_FINISHED](state: IObjectsState, action: IAction<ObjectModel>): IObjectsState {
    if (action.payload) {
      return {
        ...state,
        [action.payload.identifier ?? 'UNDEFINED']: action.payload,
      };
    }

    return { ...state };
  },
});

export default objectsReducer;
