import ObjectModel from 'models/ObjectModel';

export default interface IObjectsState {
  readonly [identifier: string]: ObjectModel;
}

export interface IRawObject {
  val: any;
  ack: boolean;
}
