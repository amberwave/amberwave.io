import {
  CREATE_NODE,
  EDIT_NODE,
  REMOVE_NODE,
  GET_NODE,
  GET_NODES,
} from '../actions/types';

const nodesReducerDefaultState = [];

const nodesReducer = (state = nodesReducerDefaultState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return [...state, action.node];
    case REMOVE_NODE:
      return state.filter(({ _id }) => _id !== action._id);
    case EDIT_NODE:
      return state.map((node) => {
        if (node._id === action._id) {
          return {
            ...nodes,
            ...action.updates,
          };
        }
        return node;
      });
    case GET_NODE:
      return {
        ...state,
        node: action.payload,
      };
    case GET_NODES:
      return {
        ...state,
        nodes: action.payload,
      };
    default:
      return state;
  }
};

export default nodesReducer;
