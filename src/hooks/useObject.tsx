import IStore from 'models/interfaces/IStore';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectObject } from 'stores/objects/ObjectsSelector';
import { useWebsocket } from './useWebsocket';

interface IOptions {
  subscribe?: boolean;
}

export const useObject = <T,>(identifier: string, options?: IOptions): IUseObjectReturn<T> => {
  const { getState, setState } = useWebsocket();
  const object = useSelector((state: IStore) => selectObject(state, identifier));

  const isLoading = !object?.ack;

  const subscribe = options?.subscribe;
  useEffect(() => {
    if (object === undefined) {
      getState(identifier, subscribe);
    }
  }, [getState, identifier, object, subscribe]);

  const setValue = useCallback(
    (value: T) => {
      setState(identifier, value);
    },
    [identifier, setState]
  );

  return { value: object?.val as T, setValue, isLoading };
};

interface IUseObjectReturn<T> {
  value: T | undefined;
  setValue: (value: T) => void;
  isLoading: boolean;
}
