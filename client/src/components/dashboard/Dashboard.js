import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentNetwork } from '../../actions/networkActions';
import Spinner from '../common/Spinner';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentNetwork();
  }

  render() {
    const { user } = this.props.auth;
    const { network, loading } = this.props.network;

    let dashboardContent;

    if (network === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if logged in user has network data
      if (Object.keys(network).length > 0) {
        dashboardContent = <h4>TODO: DISPLAY Network</h4>;
      } else {
        // User is logged in but has no network
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>
              You have not setup any devices yet, please add a node to your
              network
            </p>
            <Link to="/create-network" className="btn btn-lg btn-info">
              Add Node
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="display-4">Dashboard</div>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentNetwork: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  network: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  network: state.network,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentNetwork })(Dashboard);
