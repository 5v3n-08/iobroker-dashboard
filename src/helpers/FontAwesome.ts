import _ from 'lodash';
import * as icons from '@fortawesome/free-solid-svg-icons';

export const fasIcons: string[] = _.map(icons, (icon) => icon['iconName']);
export const isFasIcon = (value: string | undefined): boolean => value !== undefined && fasIcons.includes(value);
