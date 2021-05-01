import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import IStore from '../models/interfaces/IStore';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import toastsReducer from './toasts/ToastsReducer';

const rootReducer = (): Reducer<IStore> => {
  const reducerMap: ReducersMapObject<IStore> = {
    requesting: requestingReducer,
    error: errorReducer,
    toasts: toastsReducer,
  };

  return combineReducers(reducerMap);
};

export default rootReducer;
