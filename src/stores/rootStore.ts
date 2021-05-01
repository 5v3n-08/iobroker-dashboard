import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reduxFreeze from 'redux-freeze';
import environment from 'environment';
import rootReducer from './rootReducer';
import IStore from '../models/interfaces/IStore';
import errorToastMiddleware from '../middlewares/errorToastMiddleware';

const rootStore = (initialState: Partial<IStore>): Store<IStore> => {
  const middleware: Middleware[] = [environment.isDevelopment ? reduxFreeze : null!, thunk, errorToastMiddleware()].filter(Boolean);

  const store: Store<IStore> = createStore(rootReducer(), initialState as any, composeWithDevTools(applyMiddleware(...middleware)));

  // store.subscribe(() => console.log(store.getState()));

  return store;
};

export default rootStore;
