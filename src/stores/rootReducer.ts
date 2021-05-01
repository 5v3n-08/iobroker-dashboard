import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import IStore from '../models/interfaces/IStore';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import toastsReducer from './toasts/ToastsReducer';
import objectsReducer from './objects/ObjectsReducer';

const rootReducer = (): Reducer<IStore> => {
  const reducerMap: ReducersMapObject<IStore> = {
    requesting: requestingReducer,
    error: errorReducer,
    toasts: toastsReducer,
    objects: objectsReducer,
  };

  return combineReducers(reducerMap);
};

export default rootReducer;
