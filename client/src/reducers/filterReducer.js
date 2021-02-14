import moment from 'moment';

const filterReducerDefaultState = {
  text: '',
  sortBy: 'name',
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name',
      };
    case 'SORT_BY_STATUS':
      return {
        ...state,
        sortBy: 'status',
      };
    case 'SORT_BY_TYPE':
      return {
        ...state,
        sortBy: 'type',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name',
      };
    case 'SORT_BY_LOCATION':
      return {
        ...state,
        sortBy: 'location',
      };
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.location,
      };
    case 'SORT_BY_LOCATION_RADIUS':
      return {
        ...state,
        sortBy: 'radius',
      };
    case 'SORT_BY_DATA_TYPE':
      return {
        ...state,
        sortBy: 'dataType',
      };
  }
};

export default filterReducer;
