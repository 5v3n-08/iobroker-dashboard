import _ from 'lodash';
import moment from 'moment';

/**
 * Format a date string to german format.
 * @param value [String] Must be a valid date string for moment.js.
 * @return [string] For example "01.01.2021"
 */
export const formatGermanDate = (value: string): string => {
  return moment(value).format('DD.MM.YYYY');
};

/**
 * Format a date string to german format with date and time.
 * @param value [String] Must be a valid date string for moment.js.
 * @return [string] For example "01.01.2021 - 14:30"
 */
export const formatGermanDateTime = (value: string): string => {
  return moment(value).format('DD.MM.YYYY - HH:MM');
};

/**
 * Format a date string to a weekday.
 * @param value [String] Must be a valid date string for moment.js.
 * @return [string] For example "Monday"
 */
export const formatWeekday = (value: string): string => {
  return moment(value).format('dddd');
};

/**
 * Checks the passed date and formats it to the following format "YYYY-MM-DD".
 * @param date [string] (requried) date in different formats
 * @return [string] For example "2020-01-01"
 */
export const formatToDefaultDate = (date: string): string => moment(date, ['DD.MM.YYYY', 'YYYY-MM-DD']).format('YYYY-MM-DD');
