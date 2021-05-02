import _ from 'lodash';
import trash_blue from './svg/trash_blue.svg';
import trash_yellow from './svg/trash_yellow.svg';
import trash_grey from './svg/trash_grey.svg';
import trash_brown from './svg/trash_brown.svg';

export const trashImages = {
  trash_blue,
  trash_yellow,
  trash_grey,
  trash_brown,
};

export const trashTypes: { [key in TTrashType]: string[] } = {
  trash_blue: ['blaue', 'papier'],
  trash_yellow: ['gelbe', 'gelbetonne'],
  trash_grey: ['graue', 'restmüll'],
  trash_brown: ['braune', 'bioabfall'],
};

export const findTrashType = (values: string = ''): TTrashType[] => {
  const foundTypes: TTrashType[] = [];
  values
    .toLowerCase()
    .split(',')
    .forEach((value) => {
      value.split(' ').forEach((word) => {
        _.each(trashTypes, (names, trashType) => {
          _.each(names, (name) => {
            if (name.includes(word) && !foundTypes.includes(trashType as TTrashType)) {
              foundTypes.push(trashType as TTrashType);
              return;
            }
          });
        });
      });
    });

  return foundTypes;
};

type TTrashType = 'trash_blue' | 'trash_yellow' | 'trash_grey' | 'trash_brown';
