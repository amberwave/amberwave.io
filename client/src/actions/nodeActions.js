import axios from 'axios';

import {
  GET_ERRORS,
  GET_NODE,
  GET_NODES,
  DELETE_NODE,
  CREATE_NODE,
} from './types';

// Create Node
export const createNode = (nodeData, history) => (dispatch) => {
  axios
    .post('/api/node', nodeData)
    .then((res) =>
      dispatch({
        type: CREATE_NODE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const getNode = (nodeId) => (dispatch) => {
  let url = '/api/node/' + nodeId;
  axios
    .get(url)
    .then((res) =>
      dispatch({
        type: GET_NODE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_NODE,
        payload: {},
      })
    );
};

export const getNodes = () => (dispatch) => {
  axios
    .get('/api/node')
    .then((res) =>
      dispatch({
        type: GET_NODES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_NODES,
        payload: {},
      })
    );
};
