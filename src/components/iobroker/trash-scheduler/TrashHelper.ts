import _ from 'lodash';
import trash_blue from 'assets/svg/trash/trash_blue.svg';
import trash_yellow from 'assets/svg/trash/trash_yellow.svg';
import trash_grey from 'assets/svg/trash/trash_grey.svg';
import trash_brown from 'assets/svg/trash/trash_brown.svg';

export const trashImages = {
  trash_blue,
  trash_yellow,
  trash_grey,
  trash_brown,
};

export const trashTypes: { [key in TTrashType]: string[] } = {
  trash_blue: ['blaue'],
  trash_yellow: ['gelbe'],
  trash_grey: ['graue'],
  trash_brown: ['braune'],
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
            if (name.includes(word)) {
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
