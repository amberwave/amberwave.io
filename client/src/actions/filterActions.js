import axios from 'axios';

import {
  SET_TEXT_FILTER,
  SORT_BY_NAME,
  SORT_BY_STATUS,
  SORT_BY_TYPE,
  SORT_BY_DATE,
  SORT_BY_LOCATION,
  SET_LOCATION,
  SORT_BY_LOCATION_RADIUS,
  SORT_BY_DATA_TYPE,
} from './types';

// SET_TEXT_FILTER Action Generator
export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
});

// SORT_BY_NAME
export const sortByName = () => ({
  type: SORT_BY_NAME,
  sortBy: 'name',
});

// SORT_BY_STATUS
export const sortByStatus = () => ({
  type: SORT_BY_STATUS,
  sortBy: 'status',
});

// SORT_BY_TYPE
export const sortByType = () => ({
  type: SORT_BY_TYPE,
  sortBy: 'type',
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: SORT_BY_DATE,
  sortBy: 'date',
});

// SORT_BY_LOCATION
export const sortByLocation = () => ({
  type: SORT_BY_LOCATION,
  sortBy: 'location',
});

// SET_LOCATION
export const setLocation = ({ location }) => ({
  type: SET_LOCATION,
  location,
});

// SORT_BY_LOCATION_RADIUS
export const sortByLocationRadius = () => ({
  type: SORT_BY_LOCATION_RADIUS,
  sortBy: 'radius',
});

// SORT_BY_DATA_TYPE
export const sortByDataType = () => ({
  type: SORT_BY_DATA_TYPE,
  sortBy: 'dataType',
});
