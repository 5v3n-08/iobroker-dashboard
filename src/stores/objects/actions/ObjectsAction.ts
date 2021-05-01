import ObjectModel from 'models/ObjectModel';
import * as ActionUtility from 'utilities/ActionUtility';
import { IRawObject } from '../models/IObjectsState';

export default class ObjectsAction {
  public static readonly STORE_OBJECT_FINISHED: string = 'ObjectsAction.STORE_OBJECT_FINISHED';
  public static storeObject(payload: { identifier: string; object: IRawObject }): any {
    const objectModel = new ObjectModel({ identifier: payload.identifier, ...payload.object });
    return ActionUtility.createAction(ObjectsAction.STORE_OBJECT_FINISHED, objectModel);
  }
}
