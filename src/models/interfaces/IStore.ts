import IRequestingState from 'stores/requesting/models/IRequestingState';
import IToastsState from 'stores/toasts/models/IToastsState';
import IErrorState from 'stores/error/models/IErrorState';

export default interface IStore {
  readonly requesting: IRequestingState;
  readonly error: IErrorState;
  readonly toasts: IToastsState;
}
