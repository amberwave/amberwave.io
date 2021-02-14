// This file describes the types of actions we can use in our reducers

// Error Actions
export const GET_ERRORS = 'GET_ERRORS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// Profile Actions
export const GET_PROFILE = 'GET_PROFILE';
export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND';
export const CLEAR_CURRENT_PROFILE = 'CLEAR_CURRENT_PROFILE';
export const GET_PROFILES = 'GET_PROFILES';

// Node Actions
export const GET_NODE = 'GET_NODE';
export const GET_NODES = 'GET_NODES';
export const CREATE_NODE = 'CREATE_NODE';
export const EDIT_NODE = 'EDIT_NODE';
export const REMOVE_NODE = 'REMOVE_NODE';

// Filter Actions
export const SET_TEXT_FILTER = 'SET_TEXT_FILTERS';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_STATUS = 'SORT_BY_STATUS';
export const SORT_BY_TYPE = 'SORT_BY_TYPE';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_LOCATION = 'SORT_BY_LOCATION';
export const SET_LOCATION = 'SET_LOCATION';
export const SORT_BY_LOCATION_RADIUS = 'SORT_BY_LOCATION_RADIUS';
export const SORT_BY_DATA_TYPE = 'SORT_BY_DATA_TYPE';
