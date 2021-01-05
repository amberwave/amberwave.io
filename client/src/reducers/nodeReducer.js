import { CREATE_NODE, GET_NODES, NODE_LOADING } from '../actions/types';

const initialState = {
  node: {},
  nodes: [],
  loading: false,
};

const nodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return {
        ...state,
        nodes: [action.payload, ...state.nodes],
      };
    default:
      return state;
  }
};

export default nodeReducer;
