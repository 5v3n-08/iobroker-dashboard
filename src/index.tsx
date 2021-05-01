import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import IStore from 'models/interfaces/IStore';
import rootStore from 'stores/rootStore';

(async (window: Window): Promise<void> => {
  const initialState: Partial<IStore> = {};
  const store: Store<IStore> = rootStore(initialState);

  const rootEl: HTMLElement | null = document.getElementById('root');
  const render = (Component: typeof App, el: HTMLElement | null): void => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      el
    );
  };
  render(App, rootEl);
})(window);

reportWebVitals();
