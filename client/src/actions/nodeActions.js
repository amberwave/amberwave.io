import axios from 'axios';

import {
  GET_NODE,
  GET_NODES,
  CREATE_NODE,
  REMOVE_NODE,
  EDIT_NODE,
} from './types';

// GET_NODE Action Generator
export const getNode = () => (dispatch) => {
  axios
    .get('/api/node')
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

// GET_NODES
export const getNodes = () => (dispatch) => {
  axios
    .get('/api/nodes')
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

// CREATE_NODE Action Generator
export const createNode = (node) => ({
  type: CREATE_NODE,
  node,
});

// REMOVE_NODE Action Generator
export const removeNode = ({ id } = {}) => ({
  type: REMOVE_NODE,
  id,
});

// EDIT_NODE Generator
export const editNode = (id, updates) => ({
  type: EDIT_NODE,
  id,
  updates,
});
