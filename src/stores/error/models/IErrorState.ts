import HttpErrorResponseModel from '../../../models/interfaces/HttpErrorResponseModel';

export default interface IErrorState {
  readonly [key: string]: HttpErrorResponseModel;
}
