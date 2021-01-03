import {
  GET_NETWORK,
  NETWORK_LOADING,
  CLEAR_CURRENT_NETWORK,
} from '../actions/types';

const initialState = {
  network: null,
  networks: null,
  loading: false,
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case NETWORK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_NETWORK:
      return {
        ...state,
        network: action.payload,
        loading: false,
      };
    case CLEAR_CURRENT_NETWORK:
      return {
        ...state,
        network: null,
      };
    default:
      return state;
  }
};

export default networkReducer;
