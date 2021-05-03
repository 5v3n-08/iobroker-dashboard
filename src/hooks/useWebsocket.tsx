import { Modal, Tabs } from 'antd';
import _ from 'lodash';
import React, { Fragment, useCallback, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import environment from 'environment';
import IoBrokerStatesAction from 'stores/objects/actions/ObjectsAction';
import { IRawObject } from 'stores/objects/models/IObjectsState';
import ObjectsAction from 'stores/objects/actions/ObjectsAction';

const { TabPane } = Tabs;

interface IProps {}
export const WebsocketContextProvider: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatchStore = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { socket } = state;

  useEffect(() => {
    if (!state.socket) {
      const socket = io(`ws://${environment.socket.host}:${environment.socket.port}`, {
        query: { key: 'nokey' },
        upgrade: true,
        transports: ['websocket'],
      });

      socket.on('connect', () => {
        console.log('connected');
      });

      socket.on('stateChange', (identifier: string, object: IRawObject) => {
        // console.log(identifier, object);
        dispatchStore(ObjectsAction.storeObject({ identifier, object }));
      });

      dispatch({ type: EWebsocketActions.SET_SOCKET, payload: socket });
    }
    return () => {
      state.socket?.disconnect();
    };
  }, [state.socket, dispatch, dispatchStore]);

  const _addSubscription = useCallback((identifier: string) => {
    dispatch({ type: EWebsocketActions.ADD_SUBSCRIPTION, payload: identifier });
  }, []);

  const setState = useCallback(
    (identifier: string, value: any) => {
      socket?.emit('setState', identifier, value);
    },
    [socket]
  );

  const getState = useCallback(
    (identifier: string, subscribe: boolean = true, toJson: boolean = false) => {
      if (subscribe && !state.subscriptions.includes(identifier)) {
        _addSubscription(identifier);
      }
      socket?.emit('getState', identifier, (value: any, object: IRawObject) => {
        console.log(identifier, object);
        if (toJson) object.val = JSON.parse(object.val);

        dispatchStore(ObjectsAction.storeObject({ identifier, object }));
      });
    },
    [_addSubscription, dispatchStore, socket, state.subscriptions]
  );

  return <WebsocketContext.Provider value={{ setState, getState }}>{props.children}</WebsocketContext.Provider>;
};

interface IContextProps {
  setState(id: string, value: any): void;
  getState(id: string, subscribe?: boolean, toJson?: boolean): void;
}
export const WebsocketContext = React.createContext<IContextProps>({
  setState: () => console.log('[useWebsocket] createContext error -> setState'),
  getState: () => console.log('[useWebsocket] createContext error -> getState'),
});
export const useWebsocket = (): IContextProps => React.useContext(WebsocketContext);

//* ----- REDUCER -----

const initialState: IState = {
  subscriptions: [],
};

function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case EWebsocketActions.SET_SOCKET:
      return { ...state, socket: action.payload };
    case EWebsocketActions.ADD_SUBSCRIPTION: {
      state.socket?.emit('subscribe', action.payload);
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload],
      };
    }

    default:
      throw new Error();
  }
}

interface IState {
  socket?: SocketIOClient.Socket;
  subscriptions: string[];
}

type Action = { type: EWebsocketActions.SET_SOCKET; payload: SocketIOClient.Socket } | { type: EWebsocketActions.ADD_SUBSCRIPTION; payload: string };
export enum EWebsocketActions {
  'SET_SOCKET',
  'ADD_SUBSCRIPTION',
}
