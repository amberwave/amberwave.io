import axios from 'axios';

import {
  GET_NETWORK,
  NETWORK_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_NETWORK,
} from './types';

// Get current network
export const getCurrentNetwork = () => (dispatch) => {
  dispatch(setNetworkLoading());
  axios
    .get('/api/network')
    .then((res) =>
      dispatch({
        type: GET_NETWORK,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_NETWORK,
        payload: {},
      })
    );
};

// Create Network
export const createNetwork = (networkData, history) => (dispatch) => {
  axios
    .post('/api/network', networkData)
    .then((res) => history.push('/dashboard'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Network Loading
export const setNetworkLoading = () => {
  return {
    type: { NETWORK_LOADING },
  };
};

// Clear Current Network
export const clearCurrentNetwork = () => {
  return {
    type: { CLEAR_CURRENT_NETWORK },
  };
};
