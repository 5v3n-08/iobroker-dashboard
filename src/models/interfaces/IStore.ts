import IRequestingState from 'stores/requesting/models/IRequestingState';
import IToastsState from 'stores/toasts/models/IToastsState';
import IErrorState from 'stores/error/models/IErrorState';
import IObjectsState from 'stores/objects/models/IObjectsState';

export default interface IStore {
  readonly requesting: IRequestingState;
  readonly error: IErrorState;
  readonly toasts: IToastsState;
  readonly objects: IObjectsState;
}
