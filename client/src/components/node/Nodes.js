import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Spinner from '../common/Spinner';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { getNode, getNodes } from '../../actions/nodeActions';

class Nodes extends Component {
  componentDidMount() {
    this.props.getNodes();
  }

  render() {
    const { user } = this.props.auth;
    const { nodes } = this.props.nodes;

    let nodes;

    if (nodes === null || loading) {
      nodeTable = <Spinner />;
    } else {
      // check if logged in user has profile data
      if (Object.keys(nodes).length > 0) {
        nodeTable = <h4>TODO: DISPLAY NODES</h4>;
      } else {
        // User is logged in but has no nodes
        nodeTable = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You don't have any devices setup yet</p>
            <Link to="/add-node" className="btn btn-lg btn-info">
              Add Node
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="nodes">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="display-4">Inventory</div>
              {nodeContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getNodes: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  nodes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nodes: state.nodes,
  auth: state.auth,
});

export default connect(mapStateToProps, { getNodes })(Nodes);
