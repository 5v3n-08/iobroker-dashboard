import _ from 'lodash';
import IStore from 'models/interfaces/IStore';
import ObjectModel from 'models/ObjectModel';
import { createSelector, ParametricSelector } from 'reselect';

export class ObjectsSelector {
  public static selectObject(state: { [key: string]: ObjectModel }, identifier: string): ObjectModel | undefined {
    return _.find(state, (object) => object.identifier === identifier);
  }
}

export const selectObject: ParametricSelector<IStore, string, ObjectModel | undefined> = createSelector(
  (state: IStore) => state.objects,
  (state: IStore, identifier: string) => identifier,
  ObjectsSelector.selectObject
);
