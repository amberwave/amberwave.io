import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InventoryListItem from './InventoryListItem';
import selectNodes from '../../selectors/nodes';

export const InventoryList = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Node</th>
            <th scope="col">ID</th>
            <th scope="col">Type</th>
            <th scope="col">Network</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {props.nodes.length === 0 ? (
            <tr>
              <td>
                No nodes available. Add a new node -
                <Link to="/create-node">Create Node</Link>
              </td>
            </tr>
          ) : (
            props.nodes.map((node) => {
              return <InventoryListItem key={node._id} {...node} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

// Specifies what data this component wants from the store
const mapStateToProps = (state) => {
  return {
    nodes: selectNodes(state.nodes, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(InventoryList);
