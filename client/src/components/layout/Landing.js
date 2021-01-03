import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AmberWaveLogo from '../common/amber-wave-logo-1.0.svg';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing container">
        <div className="dark-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="display-3 mb-3 mt-4">
                  <AmberWaveLogo />
                </div>
                <p className="lead">
                  A data collecting network built for people
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info ms-3">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light ms-3">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
